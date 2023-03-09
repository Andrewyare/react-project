export interface UsersState {
	users: UserState[],
	error: string | null,
	loading: boolean
}
export interface UserState {
	id: number,
	name: string,
	username: string,
	email: string,
	address: {
		street: string,
		suite: string,
		city: string,
		zipcode: string,
		geo: {
			lat: string,
			lng: string,
		}
	}
	phone: string,
	website: string,
	company: {
		name: string,
		catchPhrase: string,
		bs: string,
	}
}

export enum UsersActionType {
	FETCH_USERS = "FETCH_USERS",
	FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
	FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
}

interface FetchUsersAction {
	type: UsersActionType.FETCH_USERS
}

interface FetchUsersSuccessAction {
	type: UsersActionType.FETCH_USERS_SUCCESS,
	payload: UserState[]
}
interface FetchUsersErrorAction {
	type: UsersActionType.FETCH_USERS_ERROR,
	payload: string
}

export type UserAction = FetchUsersAction | FetchUsersSuccessAction | FetchUsersErrorAction;