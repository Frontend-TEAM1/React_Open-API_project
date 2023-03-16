import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getIssues } from 'store/issue';
import styled from 'styled-components';
import ContentFiltering from './components/Filtering/ContentFilteringOpt';
import ContentListFiltering from './components/Filtering/ContentListFilteringOpt';
import IssueContent from './components/IssueContent';
import Pagination from './components/Pagination';

function HomePage() {
	// rendering
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const state = useSelector(state => state.issues.issues);

	// filtering
	const [filterOption, setFilterOption] = useState('created');
	const [filterListOption, setFilterListOption] = useState(10);

	useEffect(() => {
		console.log('☆☆☆☆☆☆☆', filterListOption);
		dispatch(getIssues(filterOption, filterListOption));
	}, [filterOption, filterListOption]);

	return (
		<div>
			<S.Filters>
				<ContentFiltering
					filterOption={filterOption}
					setFilterOption={setFilterOption}
				/>
				<ContentListFiltering setFilterListOption={setFilterListOption} />
			</S.Filters>
			{state.map(item => {
				return (
					<div
						onClick={() => {
							navigate(`/issue/${item.number}`);
						}}
					>
						<IssueContent issue={item} />
					</div>
				);
			})}
			<S.Flex>
				<Pagination filterListOption={filterListOption}></Pagination>
			</S.Flex>
		</div>
	);
}

export default HomePage;

const Flex = styled.div`
	width: 50%;
	margin: 0 auto;
	display: flex;
	padding: 40px;
	justify-content: space-between;
`;

const Filters = styled.div`
	display: flex;
	justify-content: flex-end;
	margin: 5px 50px 5px 0;
`;

const S = {
	Flex,
	Filters,
};
