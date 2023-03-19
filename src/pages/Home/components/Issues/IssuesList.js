import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Issue from './Issue/Issue';

function IssueList({ issues }) {
	return (
		issues &&
		issues.map((issue, idx) => (
			<S.IssueWrap>
				<S.StyledLink key={idx} to={`/detail/${issue.number}`}>
					<Issue issue={issue} />
				</S.StyledLink>
			</S.IssueWrap>
		))
	);
}

export default IssueList;

const StyledLink = styled(Link)`
	text-decoration: none;
	color: ${({ theme }) => theme.palette.black};
`;

const IssueWrap = styled.div`
	width: 50%;
	min-height: 10vh;
	margin: 0 auto;
`;

const S = {
	StyledLink,
	IssueWrap,
};
