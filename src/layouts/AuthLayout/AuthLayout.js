import React from 'react';

import { LoginPage } from 'pages';
import { useAuth } from 'hooks';

import './AuthLayout.scss';

export function AuthLayout(props) {
	const { children } = props;

	const { auth } = useAuth();

	if (!auth) return <LoginPage />;

	return <div>{children}</div>;
}
