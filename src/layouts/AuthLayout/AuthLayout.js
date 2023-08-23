import React from 'react';

import { LoginPage } from 'pages';

import './AuthLayout.scss';

export function AuthLayout(props) {
	const { children } = props;

	const auth = null;

	if (!auth) return <LoginPage />;

	return <div>{children}</div>;
}
