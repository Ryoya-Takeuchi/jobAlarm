import * as React from 'react';
import {reducer, initState, INIT,ADD_USER} from './reducer';

export interface Contexts {
	name : string
	setUser : any
}

export const defaultContexts : Contexts = {
	name : '',
	setUser : undefined
	// setUser : ("state") => undefined
}

const Store = React.createContext<Contexts>(defaultContexts);
const {Provider} = Store;

const AppProvider = ({children}: any) => {
	const [state, dispatch] = React.useReducer(reducer, initState);

	React.useEffect(() => {
		dispatch({type : INIT })
	},[])

	const setUser = (name : string) => {
		dispatch({type : ADD_USER , name : name})
	}
	
	return (
		<Provider value={{name : state.name , setUser}}>
			{children}
        </Provider>
    )

} 

export {Store}
export default AppProvider