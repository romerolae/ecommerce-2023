import { useContext } from 'react';

import Layout from '../../components/Layout';
import Card from '../../components/Card';

import ProductDetail from '../../components/ProductDetail';
import { ShoppingCartContext } from '../../Context';


function Home() {
	const context = useContext(ShoppingCartContext);

	const renderView = () => {
		if(context.filteredItems?.length > 0){
			return (
				context.filteredItems?.map((item) => (
					<Card key={item.id} data={item} />
				))
			)
			}else{
				return (
					<div>We do not have any products yet</div>				
				)
		}
	}

	
	return (
		<Layout>
			<div className='flex items-center justify-center mb-4'>
				<h1 className="font-medium text-xl">Exclusive and luxurious merchandise</h1>
			</div>
			<input type="text"
			placeholder='Search...'
			className='rounded-lg border border-black p-2 w-80 mb-4 focus:outline-none'
			onChange={(event) => context.setSearchByTitle(event.target.value)} />
			<div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
				{renderView()}	
			</div>
			<ProductDetail />
		</Layout>
	);
}

export default Home;
