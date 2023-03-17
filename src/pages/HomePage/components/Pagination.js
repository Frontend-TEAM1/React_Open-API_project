import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const { useState } = require('react');

// 작업중...!!
function Pagination({ filterListOption, limit, page, setPage }) {
	const state = useSelector(state => state.issues.issues);
	const total = 200;
	const numPages = Math.ceil(total / limit);
	console.log('#pagination#', numPages);

	return (
		<div>
			<button>처음</button>
			<button onClick={() => setPage(page - 1)} disabled={page === 1}>
				이전
			</button>
			{Array(numPages)
				.fill()
				.map((item, idx) => {
					<Link key={idx + 1} to={`?page=${idx}`}>
						{item}
					</Link>;
				})
				.join('')}
			{/* <div>
				{state.map(p => {
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
			</div> */}
			<button onClick={() => setPage(page + 1)}>다음</button>
			<button>맨끝</button>
		</div>
	);
}

export default Pagination;
