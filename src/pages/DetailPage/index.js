import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import CommentBoard from './components/CommentBoard';
import CommentInput from './components/CommentInput';
import IssueDetail from './components/IssueDetail';

const DetailPage = () => {
	const { number } = useParams();
	const state = useSelector(state => state.issues.details);
	window.scrollTo(0, 0);

	return (
		<div>
			{state && <IssueDetail number={number} />}
			<CommentBoard number={number} />
			<CommentInput />
		</div>
	);
};

export default DetailPage;
