import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import IssueApi from 'apis/issueApi';
import ListApi from 'apis/listApi';

// value
const initialState = {
	issues: [],
	targetIssue: {},
	getTodoState: {
		loading: false,
		done: false,
		err: null,
	},
};

// reducer
export const issueSlice = createSlice({
	name: 'issue',
	initialState,
	extraReducers: builder => {
		builder.addCase(getIssues.pending, state => {
			state.getTodoState.loading = true;
		});

		builder.addCase(getIssues.fulfilled, (state, action) => {
			state.issues = action.payload;
			state.getTodoState.loading = false;
			state.getTodoState.done = true;
			state.getTodoState.err = null;
		});

		builder.addCase(getIssues.rejected, (state, action) => {
			state.getTodoState.loading = false;
			state.getTodoState.done = true;
			state.getTodoState.err = action.payload;
		});

		builder.addCase(getTargetIssue.pending, state => {
			state.getTodoState.loading = true;
		});

		builder.addCase(getTargetIssue.fulfilled, (state, action) => {
			state.targetIssue = action.payload;
			state.getTodoState.loading = false;
			state.getTodoState.done = true;
			state.getTodoState.err = null;
		});

		builder.addCase(getTargetIssue.rejected, (state, action) => {
			state.getTodoState.loading = false;
			state.getTodoState.done = true;
			state.getTodoState.err = action.payload;
		});
	},
});

export const getIssues = createAsyncThunk('issue/getIssues', async issue => {
	const res = await ListApi.getList(issue);
	return res.data;
});

export const getTargetIssue = createAsyncThunk(
	'issue/getTargetIssue',
	async id => {
		const res = await IssueApi.getIssue(id);
		return res.data;
	},
);
