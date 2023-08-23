import routerUser from './routes.user';
import { Error404 } from '../pages';
import { BasicLayout } from '../layouts';

const routes = [
	...routerUser,
	{ path: '*', layout: BasicLayout, component: Error404 },
];

export default routes;
