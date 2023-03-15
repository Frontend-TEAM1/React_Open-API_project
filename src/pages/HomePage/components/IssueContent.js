import styled from 'styled-components'
import { flexCenter } from '../../../styles/common'

function IssueContent({ issue }) {
	return (
		<S.Wrapper>
			<S.Container>
				<S.Title>
					<span>{issue.title}</span>
				</S.Title>
				<S.FirstLine>
					<span>#{issue.number}</span>
					<span>{issue.user.login}</span>
					<span>{issue.created_at}</span>
				</S.FirstLine>
				<S.Body>{issue.body}</S.Body>
				<S.LastLine>
					<span>Comments {issue.comments}</span>
				</S.LastLine>
			</S.Container>
		</S.Wrapper>
	)
}
export default IssueContent

const Wrapper = styled.div`
	width: 90%;
	margin: 0 auto;
`

const Container = styled.div`
	min-height: 10vh;
	margin: 50px 0;
	padding: 30px;
	display: flex;
	border-radius: 5px;
	flex-direction: column;
	${flexCenter}
	box-shadow: 0 5px 18px -10px rgba(0, 0, 0, 0.7);
`

const Title = styled.div`
	width: 100%;
	margin-bottom: 10px;
	font-weight: bolder;
	font-size: large;
`

const FirstLine = styled.div`
	width: 100%;
	display: flex;
	margin-bottom: 20px;
	color: gray;
	justify-content: space-between;
`
const Body = styled.div`
	width: 100%;
	line-height: 30px;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 3;
	-webkit-box-orient: vertical;
	@media (max-width: 600px) {
		-webkit-line-clamp: 2;
	}
`

const LastLine = styled.div`
	width: 100%;
	margin-top: 20px;
	display: flex;
	justify-content: flex-end;
	& > div {
		padding-left: 1vw;
	}
`

const S = {
	Wrapper,
	Container,
	Title,
	FirstLine,
	Body,
	LastLine,
}
