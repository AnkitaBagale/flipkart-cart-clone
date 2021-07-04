import { useDataContext } from '../context';
import { getDiscountedPrice } from '../utils';

export const CartItemCard = ({ product }) => {
	const { dispatch } = useDataContext();

	const updateQuantity = ({ isIncrement }) => {
		dispatch({
			type: 'UPDATE_CART_QUANTITY',
			payload: { isIncrement, item: product },
		});
	};
	const removeItem = () => {
		dispatch({ type: 'REMOVE_FROM_CART', payload: { itemId: product._id } });
	};

	const saveForLater = () => {
		dispatch({ type: 'SAVE_FOR_LATER', payload: { item: product } });
	};
	return (
		<div className='grid-30-70 max-width-container'>
			<img alt='product' className='product-image' src={product.image} />

			<div>
				<div className='product-brand'>{product.brand}</div>
				<div className='product-name'>
					<b>{product.name}</b>
				</div>
				<div className='product-price'>
					Rs. {getDiscountedPrice(product.price, product.discount)}{' '}
					{product.discount > 0 && (
						<>
							<span className='strike'>{product.price}</span> {product.discount}
							%off
						</>
					)}
				</div>
				<br />
				<button
					disabled={product.quantity <= 1}
					onClick={() => updateQuantity({ isIncrement: false })}
					className='btn-primary'>
					-
				</button>
				<span> {product.quantity} </span>
				<button
					onClick={() => updateQuantity({ isIncrement: true })}
					className='btn-primary'>
					+
				</button>
				<br />
				<br />
				<button onClick={saveForLater} className='btn-primary'>
					Save for later
				</button>{' '}
				<button onClick={removeItem} className='btn-primary'>
					Remove from cart
				</button>
			</div>
		</div>
	);
};
