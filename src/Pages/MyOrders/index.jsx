import { useContext } from 'react';
import { Link } from 'react-router-dom';

import Layout from '../../components/Layout';
import OrdersCard from '../../components/OrdersCards';
import {ShoppingCartContext} from '../../Context';

function MyOrders() {
		const context = useContext(ShoppingCartContext);

	return (
		<Layout>
			<div className='flex items-center justify-center w-80 mb-4'>
			<h1 className='font-medium text-xl'>My orders</h1>
			</div>
				{
					context.order.map((order, index)=>(
						<Link key={index} to={`/my-orders/${index}`}>
							<OrdersCard
								totalPrice ={order.totalPrice}
								totalProducts ={order.totalProducts}/>
						</Link>

					))
				}
		</Layout>
	);
}

export default MyOrders;
