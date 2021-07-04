export const initialData = {
	products: [],
	cartItems: [],
	savedItems: [],
};

export const dataReducer = (state, { type, payload }) => {
	switch (type) {
		case 'SET_PRODUCTS': {
			return { ...state, products: payload.products };
		}
		case 'ADD_TO_CART': {
			return {
				...state,
				cartItems: [...state.cartItems, { ...payload.item, quantity: 1 }],
			};
		}
		case 'REMOVE_FROM_CART': {
			return {
				...state,
				cartItems: state.cartItems.filter(
					(item) => item._id !== payload.itemId,
				),
			};
		}
		case 'UPDATE_CART_QUANTITY': {
			return {
				...state,
				cartItems: state.cartItems.map((item) =>
					item._id !== payload.item._id
						? item
						: {
								...item,
								quantity: payload.isIncrement
									? item.quantity + 1
									: item.quantity - 1,
						  },
				),
			};
		}
		case 'SAVE_FOR_LATER': {
			return {
				...state,
				cartItems: state.cartItems.filter(
					(item) => item._id !== payload.item._id,
				),
				savedItems: [...state.savedItems, payload.item],
			};
		}

		case 'REMOVE_FROM_SAVED_ITEMS': {
			return {
				...state,
				savedItems: state.savedItems.filter(
					(item) => item._id !== payload.itemId,
				),
			};
		}

		case 'MOVE_TO_CART_FROM_SAVED': {
			return {
				...state,
				savedItems: state.savedItems.filter(
					(item) => item._id !== payload.item._id,
				),
				cartItems: [...state.cartItems, payload.item],
			};
		}

		default: {
			throw new Error('Unknow action on dispatch');
		}
	}
};
