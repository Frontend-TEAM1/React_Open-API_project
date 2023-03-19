import { Axios } from './core';

const PATH = `/repos/angular/angular-cli/issues`;

const IssueApi = {
	getIssue(issue) {
		return Axios.get(PATH, {
			params: {
				issue_number: issue,
			},
		});
	},
};

export default IssueApi;
