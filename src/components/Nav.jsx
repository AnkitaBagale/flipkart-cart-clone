import { NavLink } from 'react-router-dom';

export const Nav = () => {
	return (
		<div className='bg-purple'>
			<div className='nav'>
				<NavLink to='/' end className='nav-link logo'>
					Flipkart
				</NavLink>

				<NavLink
					to='/'
					end
					className='nav-link'
					activeClassName='nav-link-active'>
					Shop
				</NavLink>
				<NavLink
					to='/cart'
					className='nav-link'
					activeClassName='nav-link-active'>
					Cart
				</NavLink>
			</div>
		</div>
	);
};
