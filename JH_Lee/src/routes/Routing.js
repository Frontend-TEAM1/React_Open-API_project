import DetailPage from 'pages/DetailPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '../components/Layout/Layout'
import HomePage from '../pages/HomePage'

const Routing = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Layout />}>
					<Route path={'/issue/:id'} element={<DetailPage />} />
					<Route path={'/'} element={<HomePage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}
export default Routing
