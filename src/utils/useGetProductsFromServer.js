import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDataContext } from '../context';

export const useGetProductsFromServer = () => {
	const { dispatch } = useDataContext();
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	useEffect(() => {
		(async () => {
			try {
				setLoading(true);
				const { data } = await axios.get('products.json');
				dispatch({ type: 'SET_PRODUCTS', payload: data });
				setLoading(false);
			} catch (error) {
				setLoading(false);
				setError(true);
			}
		})();
	}, [dispatch]);

	return { loading, error };
};
