import { HashRouter } from 'react-router-dom';
import { store } from 'redux/redux-store';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { App } from 'App';
import 'index.scss';

ReactDOM.render(
	<HashRouter>
		<Provider store={store}>
			<App />
		</Provider>
	</HashRouter>,
	document.getElementById('root')
)
// @ts-ignore next line
window.store = store;