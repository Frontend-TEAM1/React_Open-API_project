import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import CommentBoard from './components/CommentBoard';
import CommentInput from './components/CommentInput';
import IssueDetail from './components/IssueDetail';

const DetailPage = () => {
	const { number } = useParams();
	const state = useSelector(state => state.issues.details);
	const status = useSelector(state => state.issues.getAllIssues);

	window.scrollTo(0, 0);

	return (
		<div>
			{status.loading && (
				<S.Loading>
					<span>LOADING...</span>
				</S.Loading>
			)}
			{state && <IssueDetail number={number} />}
			<CommentBoard number={number} />
			<CommentInput />
		</div>
	);
};

export default DetailPage;

const Loading = styled.div`
	width: 100vw;
	height: 100vh;
	opacity: 0.1;
	background-color: black;
	display: flex;
	justify-content: center;
	align-items: center;
	> span {
		color: yellow;
		font-size: 150px;
		@media (max-width: 600px) {
			font-size: 50px;
		}
	}
`;

const S = {
	Loading,
};
