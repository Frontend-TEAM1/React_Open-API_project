import styled from 'styled-components';
import { flexCenter } from 'styles/common';

function LoadPage() {
	return <S.Wrapper>LOADING...</S.Wrapper>;
}

export default LoadPage;

const Wrapper = styled.div`
	font-weight: 50px;
	color: #ded026;
	width: 100%;
	height: 100vh;
	background-color: ${({ theme }) => theme.palette.black};
	${flexCenter}
	opacity: 0.5;
`;

const S = {
	Wrapper,
};
