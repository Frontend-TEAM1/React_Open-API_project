import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import CommentBoard from './components/CommentBoard'
import CommentInput from './components/CommentInput'
import IssueDetail from './components/IssueDetail'

const DetailPage = () => {
	const { id } = useParams()
	console.log('number', number)
	const [result, setResult] = useState()
	const state = useSelector(state => state.issues.details)

	return (
		<div>
			디테일페이지{number}
			{/* {JSON.stringify(result)} */}
			{state && <IssueDetail number={number} />}
			<CommentBoard />
			<CommentInput />
		</div>
	)
}

export default DetailPage
