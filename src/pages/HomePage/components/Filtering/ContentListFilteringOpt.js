import styled from 'styled-components';

function ContentListFiltering() {
	return (
		<S.Wrapper>
			<select>
				<option>10개씩</option>
				<option>20개씩</option>
				<option>50개씩</option>
			</select>
		</S.Wrapper>
	);
}

export default ContentListFiltering;

const Wrapper = styled.div`
	background-color: orange;
`;

const S = {
	Wrapper,
};
