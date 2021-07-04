import { useDataContext } from '../context';
import { ProductCard } from './ProductCard';

export const ProductListing = () => {
	const {
		state: { products },
	} = useDataContext();

	return (
		<div className='grid-4-column'>
			{products.map((product) => (
				<ProductCard key={product._id} product={product} />
			))}
		</div>
	);
};
