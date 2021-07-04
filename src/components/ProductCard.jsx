import { useNavigate } from 'react-router';
import { useDataContext } from '../context';
import { getDiscountedPrice } from '../utils';
import { isAlreadyAddedToCart } from '../utils/isAlreadyAddedToCart';

export const ProductCard = ({ product }) => {
	const {
		state: { cartItems },
		dispatch,
	} = useDataContext();

	const navigate = useNavigate();

	const isAlreadyInCart = isAlreadyAddedToCart(cartItems, product._id);

	const addToCart = () => {
		if (isAlreadyInCart) {
			navigate('/cart');
		} else {
			dispatch({ type: 'ADD_TO_CART', payload: { item: product } });
		}
	};
	const getTextOfBtn = () => (isAlreadyInCart ? 'Go to Cart' : 'Add To Cart');

	return (
		<div className='card'>
			<img alt='product' className='product-image' src={product.image} />
			<div className='product-brand'>
				<b>{product.brand}</b>
			</div>
			<div className='product-name'>{product.name}</div>
			<div className='product-price'>
				Rs. {getDiscountedPrice(product.price, product.discount)}{' '}
				{product.discount > 0 && (
					<>
						<span className='strike'>{product.price}</span> {product.discount}
						%off
					</>
				)}
			</div>
			<button onClick={addToCart} className='btn-primary'>
				{getTextOfBtn()}
			</button>
		</div>
	);
};
