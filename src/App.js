import './App.css';
import { useGetProductsFromServer } from './utils';
import { Route, Routes } from 'react-router';
import { ProductListing, Cart, Nav } from './components';

function App() {
	const { loading, error } = useGetProductsFromServer();
	return (
		<div className='App'>
			<Nav />
			{loading && <p>loading...</p>}
			{error && <p>Something went wrong. Please refresh the page...</p>}
			<div className='content-area'>
				<Routes>
					<Route path='/' element={<ProductListing />} />
					<Route path='/cart' element={<Cart />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
