// 이슈 타이틀 + 디테일

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDetails } from 'store/issue';
import styled from 'styled-components';

function IssueDetail({ number }) {
	const dispatch = useDispatch();
	const state = useSelector(state => state.issues.details);

	useEffect(() => {
		// console.log('dispatch', dispatch(getIssues()))
		dispatch(getDetails(number));
	}, []);

	return (
		<S.Wrapper>
			<S.Title>{state.title}</S.Title>
			<br />
			<S.Info>
				<span>{state.state}</span>
				<span>{state.created_at}</span>
				{/* <span>{state.user.login}</span> */}
			</S.Info>
			<br />
			<S.Content>{state.body}</S.Content>
		</S.Wrapper>
	);
}

export default IssueDetail;

const Wrapper = styled.div`
	width: 80%;
	padding: 80px;
	margin: 0 auto;
	box-shadow: 0 5px 18px -10px rgba(0, 0, 0, 0.7);
`;

const Title = styled.div`
	font-size: 32px;
	font-weight: bold;
	@media (max-width: 600px) {
		font-size: 20px;
	}
`;

const Info = styled.div`
	font-size: 18px;
	font-weight: 100;
	color: grey;
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-top: 15px;
	@media (max-width: 600px) {
		font-size: 15px;
	}
`;

const Content = styled.div`
	margin-top: 40px;
	font-size: 20px;
	line-height: 30px;
	@media (max-width: 600px) {
		font-size: 15px;
	}
`;

const S = {
	Wrapper,
	Title,
	Info,
	Content,
};
