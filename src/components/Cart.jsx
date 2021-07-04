import { useDataContext } from '../context';
import { CartDetails } from './CartDetails';
import { CartItemCard } from './CartItemCard';
import { SaveForLater } from './SaveForLater';

export const Cart = () => {
	const {
		state: { cartItems },
	} = useDataContext();
	return (
		<div>
			<h1 className='max-width-container'>Cart: {cartItems.length} items</h1>

			{cartItems.length === 0 ? (
				<p className='max-width-container'>No items added to cart</p>
			) : (
				<CartDetails />
			)}

			<br />

			{cartItems.map((item) => (
				<CartItemCard key={item._id} product={item} />
			))}
			<br />
			<SaveForLater />
		</div>
	);
};
