import { Provider } from 'react-redux';
import Routing from 'routes/Routing';
import { store } from 'store/store';

import GlobalStyles from 'styles/global';

function App() {
	return (
		<div>
			<Provider store={store}>
				<Routing />
				<GlobalStyles />
			</Provider>
		</div>
	);
}

export default App;
