// import { Octokit } from 'octokit';
// import { useCallback } from 'react';
// import { useSelector } from 'react-redux';
// import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getIssues } from 'store/issue';
import styled from 'styled-components';

function Filtering() {
	// const { search } = useLocation();
	const navigate = useNavigate();
	const [filterOption, setFilterOption] = useState('created');
	const [filterListOption, setFilterListOption] = useState(10);
	const dispatch = useDispatch();

	console.log('★여기는 보낼때★', filterOption, filterListOption);

	useEffect(() => {
		navigate(`?sort=${filterOption}&per_page=${filterListOption}`);
		dispatch(getIssues());
	}, [filterOption, filterListOption]);

	return (
		<S.Wrapper>
			<select onChange={e => setFilterOption(e.target.value)}>
				<option value={'created'}>생성순</option>
				<option value={'updated'}>업데이트순</option>
				<option value={'comments'}>댓글순</option>
			</select>
			<select onChange={e => setFilterListOption(e.target.value)}>
				<option value={'10'}>10개씩</option>
				<option value={'20'}>20개씩</option>
				<option value={'50'}>50개씩</option>
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
