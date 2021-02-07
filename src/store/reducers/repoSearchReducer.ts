import { SEARCH_REPO_SUCCESS, repo, searchRepoSuccess } from '../types';
interface repos {
    [key: string]: { data: repo[], pageNumber: number }
}


const initialState: repos = {}

export const searchRepoReducer = (state: repos = initialState, action: searchRepoSuccess) => {
    switch (action.type) {
        case SEARCH_REPO_SUCCESS:
            const { searchText, repos, pageNumber } = action.payload;
            const newData = state[searchText] ? [...state[searchText].data, ...repos] : repos;
            return {
                ...state, [searchText]: {
                    pageNumber, data: newData,
                }
            }
        default:
            return state;
    }
}
