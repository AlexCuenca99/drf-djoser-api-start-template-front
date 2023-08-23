import React from 'react';

import './AuthLayout.scss';

export function AuthLayout(props) {
	const { children } = props;

	return (
		<div>
			<h1>AuthLayout</h1>
			{children}
		</div>
	);
}
