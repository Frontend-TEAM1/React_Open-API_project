import { Octokit } from 'octokit'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import ContentFiltering from './components/Filtering/ContentFilteringOpt'
import ContentListFiltering from './components/Filtering/ContentListFilteringOpt'
import IssueContent from './components/IssueContent'

function HomePage() {
	const [result, setResult] = useState([])
	const [page, setPage] = useState(1)
	const page1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
	const page2 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
	const navigate = useNavigate()

	const getIssues = async () => {
		const octokit = new Octokit({
			auth: process.env.REACT_APP_GITHUB_ACCESS_TOKEN, //숨겨야하는지?
		})

		const result = await octokit.request(
			'GET /repos/angular/angular-cli/issues',
			{
				owner: 'OWNER',
				repo: 'REPO',
				headers: {
					// 깃허브에 담아보내는거
				},
				per_page: 10,
				page: page, // 페이지네이션
			},
		)
		setResult(result.data)
		console.log('====>', result)
	}
	useEffect(() => {
		getIssues()
	}, [page])

	console.log(result)

	const nextPage = () => {
		if (page > 19) return
		setPage(page + 1)
	}

	const prevPage = () => {
		if (page <= 1) return
		setPage(page - 1)
	}

	const pagnation = page <= 10 ? page1 : page2

	const firstPage = () => {
		setPage(1)
	}

	const lastPage = () => {
		setPage(20)
	}

	return (
		<div>
			<S.Filters>
				<ContentFiltering />
				<ContentListFiltering />
			</S.Filters>
			{result.map(v => {
				return (
					<div
						onClick={() => {
							navigate(`/issue/${v.number}`)
						}}
					>
						<IssueContent issue={v} />
					</div>
				)
			})}
			<S.Flex>
				<button onClick={firstPage}>맨처음</button>
				<button onClick={prevPage}>이전</button>
				<div>
					{pagnation.map(p => {
						return (
							<button
								onClick={() => {
									setPage(p)
								}}
								style={{ color: page === p ? 'red' : 'black' }}
							>
								{p}
							</button>
						)
					})}
				</div>
				<button onClick={nextPage}>다음</button>
				<button onClick={lastPage}>맨끝</button>
			</S.Flex>
		</div>
	)
}

export default HomePage

const Flex = styled.div`
	width: 50%;
	margin: 0 auto;
	display: flex;
	padding: 40px;
	justify-content: space-between;
`

const Filters = styled.div`
	display: flex;
	justify-content: flex-end;
	margin: 5px 50px 5px 0;
`

const S = {
	Flex,
	Filters,
}
