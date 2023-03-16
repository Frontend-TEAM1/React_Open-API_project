import styled from 'styled-components';

function ContentFiltering({ setFilterOption }) {
	return (
		<S.Wrapper>
			<select onChange={e => setFilterOption(e.target.value)}>
				<option value={'created'}>생성순</option>
				<option value={'updated'}>업데이트순</option>
				<option value={'comments'}>댓글순</option>
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
