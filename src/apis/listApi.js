import { Axios } from './core';

const PATH = `/repos/angular/angular-cli/issues`;

const ListApi = {
	getList(issue) {
		return Axios.get(PATH, {
			params: {
				per_page: issue.perPage,
				page: issue.offset,
				sort: issue.sortState,
			},
		});
	},
};

export default ListApi;
