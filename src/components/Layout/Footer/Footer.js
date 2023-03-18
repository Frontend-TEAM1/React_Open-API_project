import styled from 'styled-components';
import { flexAlignCenter } from 'styles/common';

function BasicFooter() {
	return (
		<>
			<S.Container>
				<div>
					<p>Copyright © 2023 - All right reserved by GitHub</p>
				</div>
			</S.Container>
		</>
	);
}

export default BasicFooter;

const Container = styled.div`
	background-color: #000000;
	color: #ffffff;
	padding: 20px;
	min-height: 10vh;
	display: flex;
	align-items: center;
	& > p {
		margin: 0;
		${flexAlignCenter}
	}
`;

const S = {
	Container,
};
