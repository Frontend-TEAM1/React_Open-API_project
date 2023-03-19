import LoadPage from 'components/Loading/loading';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getTargetIssue } from 'reducer/issues';
import IssueDetail from './IssueDetail/issueDetail';

function DetailPage() {
	const { id } = useParams();
	const issues = useSelector(state => state.issue.targetIssue);
	const loading = useSelector(state => state.issue.getTodoState.loading);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getTargetIssue(id));
	}, []);
	return (
		<>
			{loading && <LoadPage />}
			{!loading && issues && <IssueDetail issues={issues} />}
		</>
	);
}

export default DetailPage;
