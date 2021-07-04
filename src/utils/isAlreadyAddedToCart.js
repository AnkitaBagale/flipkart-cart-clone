export const isAlreadyAddedToCart = (cartItems, itemId) => {
	return !!cartItems.find((item) => item._id === itemId);
};
