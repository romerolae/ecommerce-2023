import { XMarkIcon } from '@heroicons/react/24/solid';

const OrderCard = props => {
    const { id, title, price, imageUrl, handleDelete, } = props
    let renderXMarkIcon
    if (handleDelete) {
        renderXMarkIcon = <XMarkIcon className="w-6 h-6 text-black cursor-pointer" onClick={() =>handleDelete(id)}/>
    } 


	return (
		<div className="flex justify-between items-center mb-4 gap-4">
			<div className='flex items-center gap-2'>
				<figure className='w-20 h-20'>
					<img className='w-full h-full rounded-lg object-cover' src={imageUrl} alt={title} />
				</figure>
				<p className='text-sm font-light flex flex-wrap'>{title}</p>
			</div>
			<div className='flex items-center gap-2'>
				<p className='text-lg font-medium'>${price}</p>
				{renderXMarkIcon}
			</div>
		</div>
	);
};

export default OrderCard;
