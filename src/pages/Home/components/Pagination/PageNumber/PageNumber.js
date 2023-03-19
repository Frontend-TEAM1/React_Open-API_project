import styled from 'styled-components';

function PageNumber({
	num,
	offset,
	setOffset,
	setSearchParams,
	perPage,
	sortState,
}) {
	const onClickTargetPage = e => {
		if (e.target.innerText === `[ ${num} ]`) return;
		console.log(e.target);
		setSearchParams({
			perpage: perPage,
			page: parseInt(e.target.innerText),
			sort: sortState,
		});
		setOffset(parseInt(e.target.innerText));
	};
	return (
		<S.PageNum onClick={onClickTargetPage}>
			{num === offset ? `[ ${num} ]` : num}
		</S.PageNum>
	);
}
export default PageNumber;

const PageNum = styled.button`
	margin: ${({ theme }) => theme.margin.small};
`;

const S = {
	PageNum,
};
