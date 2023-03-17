import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Octokit } from 'octokit';
/*

getIssues async 함수는 GitHub API로부터 이슈 데이터를 가져옴.

그 이슈 데이터를 setIssues 액션 생성자 함수를 통해
 Redux store의 issues 상태에 저장


*/

export const getIssues = createAsyncThunk(
	'issues/getIssues',
	async (_, { getState, dispatch }) => {
		const { page } = getState().issues;
		const octokit = new Octokit({
			auth: process.env.REACT_APP_GITHUB_ACCESS_TOKEN,
		});
		console.log('!');

		const response = await octokit.request(
			'GET /repos/angular/angular-cli/issues',
			{
				owner: 'OWNER',
				repo: 'REPO',
				headers: {},
				per_page: 10,
				page: page,
			},
		);
		dispatch(getIssue(response.data));
	},
);

export const issuesSlice = createSlice({
	name: 'issues',
	initialState: {
		issues: [],
		status: 'idle',
		error: null,
		page: 1,
	},
	reducers: {
		getIssue: (state, action) => {
			console.log('셋 이슈', action.payload);
			state.issues = action.payload;
		},
		getPage: (state, action) => {
			console.log('셋 페이지1', action.payload);
			state.page = action.payload; // 페이지 상태값 변경
			console.log('셋 페이지2', state.page);
		},
	},
});
export const { getIssue, getPage } = issuesSlice.actions;
export default issuesSlice.reducer;
