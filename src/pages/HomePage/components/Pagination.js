import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getIssues, getPage } from 'reducer/issueSlice';
export default function Pagination() {
	const dispatch = useDispatch();
	//const page = useRef(1);
	//console.log('페이지', page);
	const totalItems = 200;
	const itemsPerPage = 10;
	const navigate = useNavigate();
	const page = useSelector(state => state.issues.page);
	console.log('셀렉터 ', page);
	const totalPages = Math.ceil(totalItems / itemsPerPage);
	console.log('토탈 페이지 ', totalPages);

	const pages = [];
	for (let i = 0; i < totalPages; i++) {
		const startIndex = i * itemsPerPage;
		const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
		const items = [];
		for (let j = startIndex; j < endIndex; j++) {
			items.push(j + 1);
		}
		pages.push(items);
	}

	const pagination =
		page <= 10
			? Array.from({ length: 10 }, (_, i) => i + 1)
			: Array.from({ length: 10 }, (_, i) => i + 11);

	console.log(pagination);
	console.log('페이지스', pages);
	console.log(pages[0][0]);
	console.log('윈도우!', window);

	const handlePopState = () => {
		const { page } = history.state;
		setPage(page);
	}; //history.state를 이용하여 이전 페이지 상태를 가져올 수 있습니다

	useEffect(() => {
		window.addEventListener('popstate', handlePopState);
		return () => {
			window.removeEventListener('popstate', handlePopState);
		};
	}, []);

	const setPage = useCallback(
		pageNumber => {
			dispatch(getPage(pageNumber));
			dispatch(getIssues());
			history.pushState({ page: pageNumber }, '', `?page=${pageNumber}`);
		},
		[dispatch],
	); //history.pushState를 이용하여 브라우저 히스토리에 페이지 상태를 추가

	useEffect(() => {
		const params = new URLSearchParams(window.location.search);
		const pageParam = parseInt(params.get('page'));

		if (!Number.isNaN(pageParam) && pageParam >= 1 && pageParam <= totalPages) {
			dispatch(getPage(pageParam));
			dispatch(getIssues());
			history.replaceState({ page: pageParam }, '', `?page=${pageParam}`);
		}
	}, []); // 구현하면 페이지 이동 시 브라우저 히스토리에 페이지 상태가 추가되고, 뒤로 가기 버튼을 눌렀을 때 이전 페이지 상태가 복원됩

	const nextPage = () => {
		if (page > 19) return;
		setPage(page + 1);
	};

	const prevPage = () => {
		if (page <= 1) return;
		setPage(page - 1);
	};

	//const pagnation = page <= 10 ? page1 : page2;

	const firstPage = () => {
		setPage(1);
	};

	const lastPage = () => {
		setPage(20);
	};

	return (
		<div>
			<button onClick={firstPage}>맨처음</button>
			<button onClick={prevPage}>이전</button>
			<div>
				{pagination.map(p => {
					return (
						<button
							onClick={() => {
								setPage(p);
							}}
							style={{ color: page === p ? 'red' : 'black' }}
						>
							{p}
						</button>
					);
				})}
			</div>
			<button onClick={nextPage}>다음</button>
			<button onClick={lastPage}>맨끝</button>
		</div>
	);
}
