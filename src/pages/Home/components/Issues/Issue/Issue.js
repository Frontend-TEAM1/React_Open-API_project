import styled from 'styled-components';
import { flexCenter } from 'styles/common';

function Issue({ issue }) {
	return (
		<S.IssueWrapper>
			<S.IssueHeader>
				<div>{issue.id}</div>
				<div>{issue.title}</div>
				<div>{issue.comments}</div>
			</S.IssueHeader>
			<S.IssueContent>
				<div>{issue.body}</div>
			</S.IssueContent>
			<S.IssueFooter>
				<div>{issue.user.login}</div>
				<div>{issue.created_at}</div>
			</S.IssueFooter>
		</S.IssueWrapper>
	);
}

export default Issue;

const IssueWrapper = styled.div`
	border: 1px solid black;
	border-radius: 10px;
	box-shadow: 0 5px 18px -10px rgba(0, 0, 0, 0.7);
	margin: calc(${({ theme }) => theme.margin.xxLarge}*5) auto;
	${flexCenter}
	flex-direction: column;
	/* background-color: azure; */
`;

const IssueHeader = styled.div`
	${flexCenter}
	justify-content: space-between;
	margin: ${({ theme }) => theme.margin.xLarge};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	font-size: ${({ theme }) => theme.fontSize.xLarge};
`;

const IssueContent = styled.div`
	line-height: 30px;
	overflow: hidden;
	display: -webkit-box;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 3;
	-webkit-box-orient: vertical;
	@media (max-width: 600px) {
		-webkit-line-clamp: 2;
	}
	width: 70%;
	margin: ${({ theme }) => theme.margin.xLarge};
`;

const IssueFooter = styled.div`
	${flexCenter}
	justify-content: flex-end;
	margin: ${({ theme }) => theme.margin.xLarge};
`;

const S = {
	IssueWrapper,
	IssueHeader,
	IssueContent,
	IssueFooter,
};
