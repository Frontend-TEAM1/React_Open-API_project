import styled from 'styled-components';

function ContentFiltering() {
	return (
		<S.Wrapper>
			<select>
				<option>최신순</option>
				<option>댓글순</option>
				<option>생성순</option>
			</select>
		</S.Wrapper>
	);
}

export default ContentFiltering;

const Wrapper = styled.div`
	background-color: orange;
	margin-right: 5px;
`;

const S = {
	Wrapper,
};
