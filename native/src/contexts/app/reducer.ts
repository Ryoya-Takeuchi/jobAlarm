

export const INIT = 'INIT';
export const ADD_USER =  'ADD_USER'


export interface ActionInit {
	type : 'INIT'
}
export interface ActionAddUser {
	type : 'ADD_USER',
	name : string
}
type Actions =
| ActionInit
| ActionAddUser;

export interface State {
	name : string
}

export const initState = {
	name : 'oosaki'
}


export const reducer = (state : State , action : Actions) => {
	switch(action.type) {
		case INIT:
			return initState
		case ADD_USER:
			return {
				...state,
				name : action.name
			}
		default:
			return initState;
	}
	
}