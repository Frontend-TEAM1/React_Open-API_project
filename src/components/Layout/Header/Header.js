import styled from 'styled-components';
import { flexCenter } from 'styles/common';

function BasicHeader() {
	return <S.Header>GIT ISSUES</S.Header>;
}

export default BasicHeader;

const Header = styled.h2`
	background-color: ${({ theme }) => theme.palette.black};
	color: ${({ theme }) => theme.palette.white};
	${flexCenter};
	padding: ${({ theme }) => theme.margin.xxLarge};
	font-size: ${({ theme }) => theme.fontSize.xLarge};
`;

const S = {
	Header,
};
