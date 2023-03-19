import styled from 'styled-components';
import { flexAlignCenter, flexCenter } from 'styles/common';

function IssueDetail({ issue }) {
	return (
		<S.Wrapper>
			<S.Title>{issue.title}</S.Title>
			<S.Info>
				<div>{issue.state}</div>
				<div>{issue.created_at}</div>
			</S.Info>
			<S.Content>
				<div>{issue.body}</div>
			</S.Content>
		</S.Wrapper>
	);
}

export default IssueDetail;

const Wrapper = styled.div`
	width: 80%;
	margin: ${({ theme }) => theme.margin.xxLarge} auto;
	box-shadow: 0 5px 18px -10px rgba(0, 0, 0, 0.7);
	border: 1px solid black;
`;

const Title = styled.div`
	${flexCenter}
	margin: ${({ theme }) => theme.margin.xxLarge};
	font-size: ${({ theme }) => theme.fontSize.xxLarge};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	@media (max-width: 600px) {
		font-size: ${({ theme }) => theme.fontSize.large};
	}
`;

const Info = styled.div`
	font-size: ${({ theme }) => theme.fontSize.xLarge};
	font-weight: ${({ theme }) => theme.fontWeight.medium};
	@media (max-width: 600px) {
		font-size: ${({ theme }) => theme.fontSize.medium};
	}
	${flexAlignCenter}
	justify-content: right;
	& > div {
		margin: ${({ theme }) => theme.margin.xxLarge};
	}
`;

const Content = styled.div`
	margin: calc(${({ theme }) => theme.margin.xLarge}*3);
	font-size: ${({ theme }) => theme.fontSize.Large};
	line-height: 30px;
	@media (max-width: 600px) {
		font-size: ${({ theme }) => theme.fontSize.small};
	}
`;

const S = {
	Wrapper,
	Title,
	Info,
	Content,
};
