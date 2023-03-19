import Layout from 'components/Layout';
import DetailPage from 'pages/DetailPage';
import GoToIssue from 'pages/GoToIssue';
import HomePage from 'pages/Home';

const { createBrowserRouter } = require('react-router-dom');

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '',
				element: <GoToIssue />,
			},
			{
				path: '/issues',
				element: <HomePage />,
			},
			{
				path: '/detail/:id',
				element: <DetailPage />,
			},
		],
	},
]);

export default router;
