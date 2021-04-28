import { useStore } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';

import '../styles/reboot.scss';
import '../styles/styles.scss';
import { wrapper } from '../redux';

function App({ Component, pageProps }) {
	const store = useStore((state) => state);

	return(
		<PersistGate loading={ null } persistor={ store.__persistor }>
			<Component { ...pageProps }/>
		</PersistGate>
	);
}

export default wrapper.withRedux(App);
