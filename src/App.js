import React from 'react';
import { ToastContainer } from 'react-toastify';

import { Navigation } from './routes';

export default function App() {
	return (
		<div>
			<Navigation />
			<ToastContainer
				position="bottom-center"
				autoClose={5000}
				hideProgressBar={true}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
		</div>
	);
}
