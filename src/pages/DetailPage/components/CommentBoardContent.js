// 코멘트가 쌓이는 곳
import styled from 'styled-components';

function CommentBoardContent({ issue }) {
	return (
		<>
			<S.Board>
				<S.Info>
					<span>{issue.user.login}</span>
					<span>{issue.created_at}</span>
				</S.Info>
				<S.Content>
					<span>{issue.body}</span>
				</S.Content>
			</S.Board>
			{/* ))} */}
		</>
	);
}

export default CommentBoardContent;

const Board = styled.div`
	width: 100%;
	border: 1px dashed lightgray;
	border-radius: 50px;
	padding: 30px;
	margin-bottom: 20px;
`;

const Info = styled.div`
	display: flex;
	justify-content: space-between;
	font-size: 15px;
	font-weight: bold;
	margin-bottom: 15px;
`;

const Content = styled.div`
	display: flex;
	justify-content: space-between;
	font-size: 15px;
	line-height: 30px;
`;
const S = {
	Board,
	Info,
	Content,
};
