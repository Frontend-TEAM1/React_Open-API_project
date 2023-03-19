import styled from 'styled-components';
import { flexCenter } from 'styles/common';
import PageNumber from './PageNumber/PageNumber';

function Pagination({
	offset,
	setOffset,
	pageNum,
	pageArr,
	pageArrIndex,
	onClickNextPage,
	onClickPrevPage,
	onClickInit,
	onClickLast,
	setSearchParams,
	sortState,
	perPage,
}) {
	return (
		<S.Wrapper>
			<button onClick={onClickInit} disabled={pageNum && offset === pageNum[0]}>
				[맨처음]
			</button>
			{pageArr[pageArrIndex] && (
				<>
					<button onClick={onClickPrevPage} disabled={offset === pageNum[0]}>
						[이전]
					</button>
					<S.PageNumWrapper>
						{pageArr[pageArrIndex].map((num, idx) => {
							return (
								<PageNumber
									key={idx}
									num={num}
									offset={offset}
									setOffset={setOffset}
									setSearchParams={setSearchParams}
									sortState={sortState}
									perPage={perPage}
								/>
							);
						})}
					</S.PageNumWrapper>
					<button
						onClick={onClickNextPage}
						disabled={offset === pageNum.length}
					>
						[다음]
					</button>
				</>
			)}
			<button
				onClick={onClickLast}
				disabled={pageNum && offset === pageNum.length}
			>
				[맨끝]
			</button>
		</S.Wrapper>
	);
}
export default Pagination;

const Wrapper = styled.div`
	${flexCenter}
`;
const PageNumWrapper = styled.div`
	${flexCenter}
`;

const S = {
	Wrapper,
	PageNumWrapper,
};
