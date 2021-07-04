import { useDataContext } from '../context';
import { CartItemCard } from './CartItemCard';
import { SaveForLater } from './SaveForLater';

export const Cart = () => {
	const {
		state: { cartItems },
	} = useDataContext();
	return (
		<div>
			<h1 className='max-width-container'>Cart: {cartItems.length} items</h1>
			{cartItems.map((item) => (
				<CartItemCard key={item._id} product={item} />
			))}
			{cartItems.length === 0 && (
				<p className='max-width-container'>No items added to cart</p>
			)}
			<SaveForLater />
		</div>
	);
};
