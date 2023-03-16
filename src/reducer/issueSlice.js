import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Octokit } from 'octokit'

export const getIssues = createAsyncThunk('issues/getIssues', async () => {
	const octokit = new Octokit({
		auth: process.env.REACT_APP_GITHUB_ACCESS_TOKEN,
	})

	const response = await octokit.request(
		'GET /repos/angular/angular-cli/issues',
		{
			owner: 'OWNER',
			repo: 'REPO',
			headers: {},
			per_page: 10,
			page: 1,
		},
	)

	return response.data
})

export const issuesSlice = createSlice({
	name: 'issues',
	initialState: {
		issues: [],
		status: 'idle',
		error: null,
	},
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(getIssues.pending, state => {
				state.status = 'loading'
			})
			.addCase(getIssues.fulfilled, (state, action) => {
				state.status = 'succeeded'
				state.issues = action.payload
				console.log('!')
			})
			.addCase(getIssues.rejected, (state, action) => {
				state.status = 'failed'
				state.error = action.error.message
			})
	},
})

export default issuesSlice.reducer
