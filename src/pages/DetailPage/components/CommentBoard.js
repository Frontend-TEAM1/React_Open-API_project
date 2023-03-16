// 코멘트가 쌓이는 곳
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import CommentBoardContent from './CommentBoardContent'

function CommentBoard() {
	const state = useSelector(state => state.issues.issues)
	// const idx = state.findIndex(item => item.id == id)
	return (
		<S.Wrapper>
			{state.map(item => (
				<CommentBoardContent issue={item} />
			))}
		</S.Wrapper>
	)
}

export default CommentBoard

const Wrapper = styled.div`
	width: 80%;
	padding: 50px;
	border: 1px dotted purple;
	margin: 0 auto;
`

const S = {
	Wrapper,
}
