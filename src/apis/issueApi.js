import { Axios } from './core';

const PATH = `/repos/angular/angular-cli/issues`;

const IssueApi = {
	getIssue(id) {
		return Axios.get(PATH + `/${id}`);
	},
};

export default IssueApi;
