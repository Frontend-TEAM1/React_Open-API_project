import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function Filtering() {
	const { search } = useLocation();
	const navigate = useNavigate();

	const FILTER_CATEGORY = [
		{
			sort_type: 'option',
			contents: ['created', 'updated', 'comments'],
		},
		{
			sort_type: 'list',
			contents: ['10개씩', '20개씩', '50개씩'],
		},
	];

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

export default Filtering;

const Wrapper = styled.div`
	background-color: orange;
	margin-right: 5px;
`;

const S = {
	Wrapper,
};
