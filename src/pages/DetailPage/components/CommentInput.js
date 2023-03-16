// comment input창 있는곳. (실제 추가/수정/삭제 구현은 x)

import { useState } from 'react';
import styled from 'styled-components';

function CommentInput() {
	const [inputValue, setInputValue] = useState();

	return (
		<S.Wrapper>
			<input
				value={inputValue}
				type="text"
				placeholder="Leave a comment"
				onChange={e => setInputValue(e.target.value)}
			/>
			<button>Comment</button>
		</S.Wrapper>
	);
}

export default CommentInput;

const Wrapper = styled.div`
	width: 80%;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	padding: 20px 100px 50px 100px;

	> input {
		width: 90%;
		height: 100px;
		padding: 20px;
	}

	> button {
		height: 30px;
	}
`;

const S = {
	Wrapper,
};
