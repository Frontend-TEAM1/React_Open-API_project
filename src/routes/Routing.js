import { createBrowserRouter } from 'react-router-dom'
import DetailPage from 'pages/DetailPage'
import Layout from '../components/Layout/Layout'
import HomePage from '../pages/HomePage'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{ path: '', element: <HomePage /> },
			{
				path: '/issue/:id',
				element: <DetailPage />,
			},
		],
	},
])

export default router
