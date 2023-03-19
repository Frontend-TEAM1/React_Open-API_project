import { useEffect } from 'react';
import styled from 'styled-components';
import { flexCenter } from 'styles/common';

function SortIssues({
	perPage,
	setPerPage,
	onClickPerPage,
	sortState,
	onClickSortState,
	searchParams,
	setSortState,
}) {
	useEffect(() => {
		const paramPage = parseInt(searchParams.get('perpage'));
		if (perPage === paramPage) return;
		setPerPage(paramPage);
	}, [perPage]);

	useEffect(() => {
		const paramSortState = searchParams.get('sort');
		if (sortState === paramSortState) return;
		setSortState(paramSortState);
	}, [sortState]);
	return (
		<S.Wrapper>
			<div>
				<button onClick={() => onClickPerPage(10)} disabled={perPage === 10}>
					10개
				</button>
				<button onClick={() => onClickPerPage(20)} disabled={perPage === 20}>
					20개
				</button>
				<button onClick={() => onClickPerPage(50)} disabled={perPage === 50}>
					50개
				</button>
			</div>
			<div>
				<button
					onClick={() => onClickSortState('created')}
					disabled={sortState === 'created'}
				>
					생성순
				</button>
				<button
					onClick={() => onClickSortState('updated')}
					disabled={sortState === 'updated'}
				>
					업데이트순
				</button>
				<button
					onClick={() => onClickSortState('comments')}
					disabled={sortState === 'comments'}
				>
					댓글순
				</button>
			</div>
		</S.Wrapper>
	);
}
export default SortIssues;

const Wrapper = styled.div`
	${flexCenter}
	justify-content: space-evenly;
	& > div > button {
		margin: ${({ theme }) => theme.margin.small};
		padding: ${({ theme }) => theme.padding.small};
	}
`;

const S = {
	Wrapper,
};
