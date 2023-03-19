import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { flexCenter } from 'styles/common';

function GoToIssue() {
	const navigate = useNavigate();
	return (
		<GoTo onClick={() => navigate('/issues?perpage=10&page=1&sort=created')}>
			ISSUES
		</GoTo>
	);
}

export default GoToIssue;

const GoTo = styled.div`
	${flexCenter}
	margin: ${({ theme }) => theme.margin.xxLarge} auto;
	padding: ${({ theme }) => theme.padding.xxLarge};
	border: 1px solid;
	width: 25%;
	cursor: pointer;
`;
