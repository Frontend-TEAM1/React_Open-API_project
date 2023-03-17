// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Octokit } from 'octokit';
// import { useLocation } from 'react-router-dom';

const octokit = new Octokit({
	auth: process.env.REACT_APP_GITHUB_ACCESS_TOKEN,
});

// const { search } = useLocation();
// console.log('★★★★★★★★★★★★', search);

const initialState = {
	issues: [],
	details: [],
	comments: [],
	getAllIssues: {
		loading: false,
		done: false,
		error: null,
	},
};

export const issueSlice = createSlice({
	name: 'issue',
	initialState,
	extraReducers: builder => {
		builder.addCase(getIssues.pending, state => {
			state.getAllIssues.loading = true;
		});
		builder.addCase(getIssues.fulfilled, (state, action) => {
			state.issues = action.payload;
			state.getAllIssues.loading = false;
			state.getAllIssues.done = true;
			state.getAllIssues.error = null;
		});
		builder.addCase(getIssues.rejected, (state, action) => {
			state.getAllIssues.loading = false;
			state.getAllIssues.done = true;
			state.getAllIssues.error = action.payload;
		});
		builder.addCase(getDetails.pending, state => {
			state.getAllIssues.loading = true;
		});
		builder.addCase(getDetails.fulfilled, (state, action) => {
			state.details = action.payload;
			state.getAllIssues.loading = false;
			state.getAllIssues.done = true;
			state.getAllIssues.error = null;
		});
		builder.addCase(getDetails.rejected, (state, action) => {
			state.getAllIssues.loading = false;
			state.getAllIssues.done = true;
			state.getAllIssues.error = action.payload;
		});
		builder.addCase(getComments.pending, state => {
			state.getAllIssues.loading = true;
		});
		builder.addCase(getComments.fulfilled, (state, action) => {
			state.comments = action.payload;
			state.getAllIssues.loading = false;
			state.getAllIssues.done = true;
			state.getAllIssues.error = null;
		});
		builder.addCase(getComments.rejected, (state, action) => {
			state.getAllIssues.loading = false;
			state.getAllIssues.done = true;
			state.getAllIssues.error = action.payload;
		});
	},
});

const sortingOption = new URLSearchParams(location.search).get('sort');
const ListingOption = new URLSearchParams(location.search).get('per_page');

export const getIssues = createAsyncThunk('issue/getIssues', async () => {
	const res = await octokit.request('GET /repos/angular/angular-cli/issues', {
		owner: 'angular',
		repo: 'angular-cli',
		state: 'open',
		sort: sortingOption,
		per_page: ListingOption,
		page: 1,
	});
	console.log('★★★★★★★★★★★★', sortingOption, ListingOption);
	return res.data;
});

export const getDetails = createAsyncThunk('issue/getDetails', async number => {
	console.log('reducer', number);
	const res = await octokit.request(
		`GET /repos/angular/angular-cli/issues/${number}`,
		{
			owner: 'angular',
			repo: 'angular-cli',
			issue_number: number,
		},
	);
	return res.data;
});

export const getComments = createAsyncThunk(
	'issue/getComments',
	async number => {
		const res = await octokit.request(
			`GET /repos/angular/angular-cli/issues/${number}/comments`,
			{
				owner: 'angular',
				repo: 'angular-cli',
			},
		);
		return res.data;
	},
);
