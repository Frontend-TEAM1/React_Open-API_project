// 코멘트가 쌓이는 곳
import { useSelector } from 'react-redux'
import styled from 'styled-components'

function CommentBoardContent({ issue }) {
	const state = useSelector(state => state.issues.issues)
	// const idx = state.findIndex(item => item.id == id)
	comments: 4
	comments_url: 'https://api.github.com/repos/angular/angular-cli/issues/24836/comments'

	return (
		<>
			{state.map(item => (
				<S.Board issue={item} />
			))}
		</>
	)
}

export default CommentBoardContent

const Board = styled.div`
	width: 100%;
	border: 1px solid red;
	margin: 0 auto;
`

const S = {
	Board,
}
