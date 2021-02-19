import React, { useEffect, useMemo, useState } from 'react';
import { Avatar, Link, Tooltip, useTheme } from 'components';
import { useConfigs } from 'lib/config-context';
import { CONTRIBUTORS_URL, GITHUB_URL } from 'lib/constants';

const RepoMainURL = `${GITHUB_URL}/blob/main`;

export interface Contributor {
	name: string;
	avatar: string;
	url: string;
}

interface Props {
	path: string;
}

async function getContributors(path: string) {
	try {
		const response = await fetch(`${CONTRIBUTORS_URL}?path=${path}`);
		if (!response.ok || response.status === 204) return [];
		const ret = await response.json() as Array<{
			author: {
				login: string;
				id: number;
				avatar_url: string;
				html_url: string;
			};
		}>;
		const users = new Map<number, Contributor>();
		ret.forEach((it) => {
			const author = it.author;
			if (!users.has(author.id)) {
				users.set(author.id, {
					avatar: author.avatar_url,
					name: author.login,
					url: author.html_url
				})
			}
		});
		return Array.from(users.values());
	} catch (e) {
		return [];
	}
}

const Contributors: React.FC<Props> = ({ path }) => {
	const theme = useTheme();
	const { isChinese } = useConfigs();
	const [users, setUsers] = useState<Array<Contributor>>([]);
	const link = useMemo(() => `${RepoMainURL}/${path || '/pages'}`, []);

	useEffect(() => {
		let unmount = false;
		(async () => {
			const contributors = await getContributors(path);
			if (unmount) return;
			setUsers(contributors);
		})();
		return () => {
			unmount = true;
		};
	}, []);

	return (
		<div className="contributors">
			{users.map((user, index) => (
				<Tooltip text={<b>{user.name}</b>} key={`${user.url}-${index}`}>
					<Link color target="_blank" rel="nofollow" href={user.url}>
						<Avatar src={user.avatar} />
					</Link>
				</Tooltip>
			))}
			<Tooltip
				text={isChinese ? '在 GitHub 上编辑此页面' : 'Edit this page on GitHub'}
				type="dark">
				<Link color target="_blank" rel="nofollow" href={link}>
					<Avatar text="Add" />
				</Link>
			</Tooltip>
			<style jsx>{`
				.contributors {
					padding-left: ${theme.layout.gap};
					padding-top: ${theme.layout.gap};
					max-width: 100%;
					height: auto;
					display: flex;
					flex-wrap: wrap;
				}

				.contributors :global(.tooltip) {
					margin-right: 3px;
				}
			`}</style>
		</div>
	);
};

export default Contributors;
