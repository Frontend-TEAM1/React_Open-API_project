// comment input창 있는곳. (실제 추가/수정/삭제 구현은 x)

import { useState } from 'react'

function CommentInput() {
	const [inputValue, setInputValue] = useState()

	return (
		<div>
			<input
				value={inputValue}
				type="text"
				placeholder="Leave a comment"
				onChange={e => setInputValue(e.target.value)}
			/>
			<button>Comment</button>
		</div>
	)
}

export default CommentInput
