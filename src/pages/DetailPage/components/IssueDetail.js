// 이슈 타이틀 + 디테일

import { useDispatch, useSelector } from 'react-redux'
import { getDetails } from 'store/issue'
import styled from 'styled-components'

function IssueDetail({ number }) {
	// const idx = state.findIndex(item => item.number == num)
	const dispatch = useDispatch()
	dispatch(getDetails(number))
	const state = useSelector(state => state.issues.details)
	console.log('여기', state)
	return (
		<S.Wrapper>
			<S.Title>{state.title}</S.Title>
			<br />
			<S.Info>
				<span>{state.state}</span>
				<span>{state.created_at}</span>
				<span>{state.user.login}</span>
			</S.Info>
			<br />
			<S.Content>{state.body}</S.Content>
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
