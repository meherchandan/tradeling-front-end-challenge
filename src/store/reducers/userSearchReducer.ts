import { SEARCH_USERS_SUCCESS, user, searchUsersSuccess } from '../types';
interface users {
    [key: string]: { data: user[], pageNumber: number }
}

const initialState: users = {}

export const searchUserReducer = (state: users = initialState, action: searchUsersSuccess) => {
    switch (action.type) {
        case SEARCH_USERS_SUCCESS:
            const { searchText, users, pageNumber } = action.payload;
            const newData = state[searchText] ? [...state[searchText].data, ...users] : users;
            return {
                ...state, [searchText]: {
                    pageNumber, data: newData,
                }
            }
        default:
            return state;
    }
}
