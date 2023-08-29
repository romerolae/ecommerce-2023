import { XMarkIcon } from '@heroicons/react/24/solid';


import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
import './styles.css';
const ProductDetail = () => {
	const context = useContext(ShoppingCartContext);
	
	return (
		<aside
			className={`${
				context.isProductDetailOpen ? 'flex' : 'hidden'
			} product-detail flex-col fixed right-0 border border-black rounded-lg bg-white `}
		>
			<div className="flex justify-between items-center p-6 ">
				<h2 className="font-medium text-xl ">Product Details</h2>
				<div>
					<XMarkIcon
						className="w-6 h-6 text-black cursor-pointer"
						onClick={() => context.closeProductDetail()}
					/>
				</div>
			</div>
			<div className="flex-1 flex-col items-center justify-center overflow-y-scroll">
				<figure className="px-6 py-6">
					<img
						className="w-3/4 h-3/4 rounded-lg "
						src={context.productToShow.image}
						alt={context.productToShow.title}
					/>
				</figure>
				<p className="flex flex-col px-4 gap-3">
					<span className="font-medium text-md">
						{context.productToShow.title}
					</span>
					<span className="font-medium text-2xl">
						Price: ${context.productToShow.price}
					</span>
				</p>
			</div>
		</aside>
	);
};

export default ProductDetail;
