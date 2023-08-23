import { AuthLayout } from '../layouts';
import { Login } from '../pages';

const routesUser = [
	{
		path: '/',
		layout: AuthLayout,
		component: Login,
	},
	{
		path: '/login',
		layout: AuthLayout,
		component: Login,
	},
];

export default routesUser;
