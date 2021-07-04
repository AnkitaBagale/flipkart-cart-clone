import { useDataContext } from '../context';
import { SavedItemCard } from './SavedItemCard';

export const SaveForLater = () => {
	const {
		state: { savedItems },
	} = useDataContext();
	return (
		<div>
			<hr />
			<h3 className='max-width-container'>Saved for later</h3>
			{savedItems.length === 0 && (
				<p className='max-width-container'>No items saved</p>
			)}
			{savedItems.map((item) => (
				<SavedItemCard key={item._id} product={item} />
			))}
		</div>
	);
};
