import { useRoutes, BrowserRouter } from 'react-router-dom';
import { ShoppingCartProvider } from '../../Context';

import Home from '../Home/';
import MyAccount from '../MyAccount';
import MyOrder from '../MyOrder';
import MyOrders from '../MyOrders';
import NotFound from '../NotFound';
import SingIn from '../SignIn';
import Navbar from '../../components/Navbar';
import CheckoutMenu from '../../components/CheckoutMenu';
import './App.css';

const AppRoutes = () => {
	let routes = useRoutes([
		{ path: '/', element: <Home /> },
		{ path: '/all', element: <Home /> },
		{path:'/clothes', element: <Home /> },
		{ path: '/electronics', element: <Home /> },
		{ path: '/jewelry', element: <Home /> },
		{ path: '/toys', element: <Home /> },
		{ path: '/others', element: <Home /> },
		{path: '/my-account', element: <MyAccount /> },
		{ path: '/my-order', element: <MyOrder /> },
		{ path: '/my-orders', element: <MyOrders /> },
		{ path: '/my-orders/last', element: <MyOrder /> },
		{ path: '/my-orders/:id', element: <MyOrder /> },
		{path: '/sign-in', element: <SingIn /> },
		{ path: '*', element: <NotFound /> },
	]);

	return routes;
};

const App = () => {
	return (
		<ShoppingCartProvider>
		<BrowserRouter>
			<AppRoutes />
			<Navbar />
			<CheckoutMenu />
		</BrowserRouter>
		</ShoppingCartProvider>
	);
};

export default App;
