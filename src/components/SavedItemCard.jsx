import { useDataContext } from '../context';
import { getDiscountedPrice } from '../utils';

export const SavedItemCard = ({ product }) => {
	const { dispatch } = useDataContext();

	const removeFromSavedList = () => {
		dispatch({
			type: 'REMOVE_FROM_SAVED_ITEMS',
			payload: { itemId: product._id },
		});
	};

	const moveToCart = () => {
		dispatch({
			type: 'MOVE_TO_CART_FROM_SAVED',
			payload: { item: product },
		});
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
				<button disabled={true} className='btn-primary'>
					-
				</button>
				<span> {product.quantity} </span>
				<button disabled={true} className='btn-primary'>
					+
				</button>
				<br />
				<br />
				<button className='btn-primary' onClick={moveToCart}>
					Move to Cart
				</button>{' '}
				<button className='btn-outline' onClick={removeFromSavedList}>
					Remove
				</button>
			</div>
		</div>
	);
};
