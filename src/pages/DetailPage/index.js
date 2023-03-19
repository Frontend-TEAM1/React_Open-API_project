import LoadPage from 'components/Loading/loading';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getIssues } from 'reducer/issues';
import IssueDetail from './IssueDetail/issueDetail';

function DetailPage() {
	const { id } = useParams();
	const issues = useSelector(state => state.issue.issues);
	const loading = useSelector(state => state.issue.getTodoState.loading);
	const issue = issues.find(item => item.id == id);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getIssues(id));
	}, []);
	return (
		<>
			{loading && <LoadPage />}
			{!loading && issue && <IssueDetail issue={issue} />}
		</>
	);
}

export default DetailPage;
