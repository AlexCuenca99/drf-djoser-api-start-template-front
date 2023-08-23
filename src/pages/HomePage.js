import React from 'react';
import { Button } from 'semantic-ui-react';

import { useAuth } from 'hooks';
export function Homepage() {
	const { logout } = useAuth();
	return (
		<div>
			<h1>Home</h1>
			<Button onClick={logout}>Logout</Button>
		</div>
	);
}
