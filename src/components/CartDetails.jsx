import { useDataContext } from '../context';

export const CartDetails = () => {
	const {
		state: { cartItems },
	} = useDataContext();

	console.log({ cartItems });

	const { price, discount, finalPrice } = cartItems.reduce(
		(cartValue, item) => {
			const itemPrice = item.price * item.quantity;
			const itemDiscount = (itemPrice * item.discount) / 100;
			const itemFinalPrice = itemPrice - itemDiscount;
			return {
				price: cartValue.price + itemPrice,
				discount: cartValue.discount + itemDiscount,
				finalPrice: cartValue.finalPrice + itemFinalPrice,
			};
		},
		{ price: 0, discount: 0, finalPrice: 0 },
	);

	return (
		<div className='cart-details max-width-container'>
			<br />
			<div>
				Price ({cartItems.length}item): Rs. {price}
			</div>
			<div>Total Discount: - Rs. {discount}</div>
			<hr />
			<div>Total Amount: Rs. {finalPrice}</div>
			<br />
		</div>
	);
};
