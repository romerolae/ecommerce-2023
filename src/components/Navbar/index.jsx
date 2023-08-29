import { ShoppingBagIcon } from '@heroicons/react/24/solid';

import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';

const Navbar = () => {
	const context = useContext(ShoppingCartContext);
	const activeStyle = 'underline underline-offset-4';

	return (
		<nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light">
			<ul className="flex items-center gap-3">
				<li className="text-lg semibold-bold">
					<NavLink to="/"> EasyMerchant</NavLink>
				</li>
				<li>
					<NavLink
						to="/all"
						onClick={() => context.setSearchByCategory()}
						className={({ isActive }) => (isActive ? activeStyle : undefined)}
					>
						All
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/clothes"
						onClick={() => context.setSearchByCategory(`men's clothing`, `women's clothing`)}
						className={({ isActive }) => (isActive ? activeStyle : undefined)}
					>
						Clothes
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/electronics"
						onClick={() => context.setSearchByCategory('electronics')}
						className={({ isActive }) => (isActive ? activeStyle : undefined)}
					>
						Electronics
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/jewelry"
						onClick={() => context.setSearchByCategory('jewelery')}
						className={({ isActive }) => (isActive ? activeStyle : undefined)}
					>
						Jewelry
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/toys"
						onClick={() => context.setSearchByCategory('toys')}
						className={({ isActive }) => (isActive ? activeStyle : undefined)}
					>
						Toys
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/others"
						onClick={() => context.setSearchByCategory('others')}
						className={({ isActive }) => (isActive ? activeStyle : undefined)}
					>
						Others
					</NavLink>
				</li>
			</ul>
			<ul className="flex items-center gap-3">
				<li className="text-black/60">romerolae@gmail.com</li>
				<li>
					<NavLink
						to="/my-orders"
						className={({ isActive }) => (isActive ? activeStyle : undefined)}
					>
						My Orders
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/my-account"
						className={({ isActive }) => (isActive ? activeStyle : undefined)}
					>
						My Account
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/sign-in"
						className={({ isActive }) => (isActive ? activeStyle : undefined)}
					>
						Sign In
					</NavLink>
				</li>
				<li className="flex justify-content items-center gap-1">
					<ShoppingBagIcon className="w-6 h-6 text-black" />
					<div>{context.productToCart.length}</div>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
