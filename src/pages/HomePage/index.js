import { Octokit } from 'octokit';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import { getIssues } from 'reducer/issueSlice';
import styled from 'styled-components';
import ContentFiltering from './components/Filtering/ContentFilteringOpt';
import ContentListFiltering from './components/Filtering/ContentListFilteringOpt';
import IssueContent from './components/IssueContent';
import Pagination from './components/Pagination';

function HomePage() {
	const [result, setResult] = useState([]);
	let page = 1;
	const page1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	const page2 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
	const navigate = useNavigate();
	const issues = useSelector(state => state.issues.issues);
	//console.log('홈 인덱스', issues);

	const getIssues = async () => {
		const octokit = new Octokit({
			auth: process.env.REACT_APP_GITHUB_ACCESS_TOKEN,
		});

		const result = await octokit.request(
			'GET /repos/angular/angular-cli/issues',
			{
				owner: 'OWNER',
				repo: 'REPO',
				headers: {},
				per_page: 10,
				page: page,
			},
		);
		setResult(result.data);
	};

	useEffect(() => {
		getIssues();
	}, [page]);

	//console.log('result', result);

	return (
		<div>
			<S.Filters>
				<ContentFiltering />
				<ContentListFiltering />
			</S.Filters>
			{issues.map(v => {
				return (
					<div
						onClick={() => {
							navigate(`/issue/${v.number}`);
						}}
					>
						<IssueContent issue={v} />
					</div>
				);
			})}
			<S.Flex>
				<Pagination />
			</S.Flex>
		</div>
	);
}

export default HomePage;

const Flex = styled.div`
	width: 50%;
	margin: 0 auto;
	display: flex;
	padding: 40px;
	justify-content: space-between;
`;

const Filters = styled.div`
	display: flex;
	justify-content: flex-end;
	margin: 5px 50px 5px 0;
`;

const S = {
	Flex,
	Filters,
};

/*
useEffect(() => {
		console.log('---------1---------');
		const getIssues = async () => {
			const octokit = new Octokit({
				auth: process.env.REACT_APP_GITHUB_ACCESS_TOKEN,
			});
			console.log('---------2---------');
			const result = await octokit.request(
				'GET /repos/angular/angular-cli/issues',
				{
					owner: 'OWNER',
					repo: 'REPO',
					headers: {},
					per_page: 10,
					page: page,
				},
			);
			console.log('---------3---------');

			setResult(result.data);
			console.log('---------4---------');
		};
		console.log('---------5---------');
		pageRef.current = page;
		console.log('---------6---------');
		getIssues();
		console.log('---------7---------');
		const state = { page };
		const title = '';
		const url = `?page=${page}`;
		console.log('---------8---------');
		history.pushState(state, title, url);
		console.log('---------9---------');

		return history.replaceState(null, title, null);
	}, [page]);
	console.log('---------10---------');

*/
