import Filtering from 'components/Filter/ContentFilteringOpt';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import { getIssues } from 'store/issue';
import styled from 'styled-components';
// import ContentFiltering from './components/Filtering/ContentFilteringOpt';
// import ContentListFiltering from './components/Filtering/ContentListFilteringOpt';
import IssueContent from './components/IssueContent';
import Pagination from './components/Pagination';

function HomePage() {
	// rendering
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const state = useSelector(state => state.issues.issues);
	const status = useSelector(state => state.issues.getAllIssues);
	console.log('STATE================>', status);

	// // filtering
	// const [filterOption, setFilterOption] = useState('created');
	// const [filterListOption, setFilterListOption] = useState(10);

	// useEffect(() => {
	// 	// console.log('☆☆☆☆☆☆☆', filterListOption);
	// 	dispatch(getIssues());
	// }, []);

	// pagination
	const [limit, setLimit] = useState(1); // 페이지당 게시물 수
	const [page, setPage] = useState(1); // 페이지 인덱스(현재 페이지 번호)
	// const [total, setTotal] = useState(1); // 총 게시물 수
	const offset = (page - 1) * limit;
	const currentPage = new URLSearchParams(location.search).get('page');
	console.log('#index#', currentPage);

	return (
		<div>
			{status.loading && (
				<S.Loading>
					<span>LOADING...</span>
				</S.Loading>
			)}
			<Filtering></Filtering>
			{/* <S.Filters>
				<ContentFiltering
					filterOption={filterOption}
					setFilterOption={setFilterOption}
				/>
				<ContentListFiltering setLimit={setLimit} />
			</S.Filters> */}
			{state &&
				state.map(item => {
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
				<Pagination
					// filterListOption={filterListOption}
					limit={limit}
					page={page}
					setPage={setPage}
				></Pagination>
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

const Loading = styled.div`
	width: 100vw;
	height: 100vh;
	opacity: 0.1;
	background-color: black;
	display: flex;
	justify-content: center;
	align-items: center;
	> span {
		color: yellow;
		font-size: 150px;
		@media (max-width: 600px) {
			font-size: 50px;
		}
	}
`;

const S = {
	Flex,
	Filters,
	Loading,
};
