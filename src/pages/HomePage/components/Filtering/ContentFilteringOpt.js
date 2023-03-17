import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function ContentFiltering({ filterOption, setFilterOption }) {
	const navigate = useNavigate();
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
