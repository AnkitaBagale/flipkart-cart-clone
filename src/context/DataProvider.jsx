import { createContext, useContext, useReducer } from 'react';
import { dataReducer, initialData } from './data.reducer';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
	const [state, dispatch] = useReducer(dataReducer, initialData);

	return (
		<DataContext.Provider value={{ state, dispatch }}>
			{children}
		</DataContext.Provider>
	);
};

export const useDataContext = () => useContext(DataContext);
