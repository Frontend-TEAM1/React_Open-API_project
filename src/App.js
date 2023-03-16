import { RouterProvider } from 'react-router-dom'
import GlobalStyles from './styles/global'
import { Provider } from 'react-redux'
import { store } from 'store/@store'
import router from 'routes/Routing'

function App() {
	return (
		<Provider store={store}>
			<GlobalStyles />
			<RouterProvider router={router} />
		</Provider>
	)
}

export default App
