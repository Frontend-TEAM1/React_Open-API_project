// 이슈 타이틀 + 디테일

import styled from 'styled-components'

function IssueDetail({ result }) {
	console.log(result)
	return (
		<S.Wrapper>
			<S.Title>result.title</S.Title>
			<br />
			<S.Info>
				<span>result.state</span>
				<span>result.created_at</span>
				<span>result.login</span>
			</S.Info>
			<br />
			<S.Content>result.body</S.Content>
		</S.Wrapper>
	)
}

export default IssueDetail

const Wrapper = styled.div`
	width: 80%;
	padding: 60px;
	border: 1px dotted purple;
	margin: 0 auto;
`

const Title = styled.div`
	font-size: 30px;
	font-weight: bold;
`

const Info = styled.div`
	font-size: 13px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`

const Content = styled.div`
	font-size: 20px;
`

const S = {
	Wrapper,
	Title,
	Info,
	Content,
}
