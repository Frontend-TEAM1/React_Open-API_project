import styled from 'styled-components';

function ContentListFiltering({ setFilterListOption, setLimit }) {
	return (
		<S.Wrapper>
			<select onChange={e => setLimit(e.target.value)}>
				<option value={10}>10개씩</option>
				<option value={20}>20개씩</option>
				<option value={50}>50개씩</option>
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
