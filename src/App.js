import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { store } from 'store/store';
import { ThemeProvider } from 'styled-components';
import router from './routes/Routing';
import GlobalStyles from './styles/global';
import { theme } from './styles/theme';

function App() {
	return (
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<GlobalStyles />
				<RouterProvider router={router} />
			</ThemeProvider>
		</Provider>
	);
}

export default App;
