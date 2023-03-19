import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { flexAlignCenter } from 'styles/common';

function BasicFooter() {
	return (
		<S.Footer>
			<S.FooterLogo>
				<div>
					<FontAwesomeIcon icon={faGithub} />
				</div>
				<div>ⓒ 2023 GitHub, Inc.</div>
			</S.FooterLogo>
			<S.FooterNav>
				<div>Terms</div>
				<div>Privacy</div>
				<div>Security</div>
				<div>Status</div>
				<div>Docs</div>
				<div>Contact GitHub</div>
				<div>Pricing</div>
				<div>API</div>
				<div>Training</div>
				<div>Blog</div>
				<div>About</div>
			</S.FooterNav>
		</S.Footer>
	);
}

export default BasicFooter;

const Footer = styled.footer`
	${flexAlignCenter}
	justify-content: center;
`;

const FooterLogo = styled.div`
	${flexAlignCenter}
	&>div {
		margin: calc(${({ theme }) => theme.margin.small} / 2);
	}
	& > div:first-child {
		font-size: ${({ theme }) => theme.fontSize.xLarge};
	}
	& > div:last-child {
		font-size: 0.8rem;
	}
`;
const FooterNav = styled.div`
	${flexAlignCenter}
	font-size: 0.8rem;
	color: ${({ theme }) => theme.palette.primary[300]};
	& > div {
		margin: ${({ theme }) => theme.padding.medium};
	}
`;

const S = {
	Footer,
	FooterLogo,
	FooterNav,
};
