import { XMarkIcon } from '@heroicons/react/24/solid';

import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartContext } from '../../Context';
import OrderCard from '../OrderCard';
import { totalPrice } from '../../utils';
import './styles.css';


const CheckoutMenu = () => {
	const context = useContext(ShoppingCartContext);

	// to delete items from the cart
	const handleDelete = (id) => {
		const filteredProduct = context.productToCart.filter(
			(product) => product.id !== id
		);
		context.setProductToCart(filteredProduct);
	};

	const handleCheckout = () => {
		const orderToAdd = {
			date: '01.02.23',
			products: context.productToCart,
			totalProducts: context.productToCart.length,
			totalPrice: totalPrice(context.productToCart),
		};
		context.setOrder([...context.order, orderToAdd]);
		context.setProductToCart([]);
		context.searchByTitle(null);
	};

	return (
		<aside
			className={`${
				context.isCheckoutMenuOpen ? 'flex' : 'hidden'
			} checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white `}
		>
			<div className="flex justify-between items-center p-6">
				<h2 className="font-medium text-xl ">My Orders</h2>
				<div>
					<XMarkIcon
						className="w-6 h-6 text-black cursor-pointer"
						onClick={() => context.closeCheckoutMenu()}
					/>
				</div>
			</div>
			<div className="px-6 overflow-y-scroll flex-1">
				{context.productToCart?.map((product) => (
					<OrderCard
						key={product.id}
						id={product.id}
						title={product.title}
						imageUrl={product.image}
						price={product.price}
						handleDelete={handleDelete}
					/>
				))}
			</div>
			<div className="px-6 mb-6">
				<p className="flex justify-between items-center mb-2">
					<span className="font-light">Total:</span>
					<span className="font-medium text-2xl">
						${totalPrice(context.productToCart)}
					</span>
				</p>
                <Link to="/my-orders/last">
                    <button className='w-full bg-black py-3 text-white rounded-lg' onClick={() => handleCheckout()}>Proceed to checkout</button>
                </Link>
			</div>
		</aside>
	);
};

export default CheckoutMenu;
