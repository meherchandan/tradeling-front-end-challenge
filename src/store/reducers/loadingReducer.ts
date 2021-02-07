import {
    SEARCH_RESULTS_LOADING_START,
    SEARCH_RESULTS_FAILURE,
    SEARCH_RESULTS_LOADING_END,
    SEARCH_USERS_SUCCESS,
    SEARCH_REPO_SUCCESS,
    UNSET_LOAD_MORE,
    loaderEnd, loaderStart, searchresultsFailure,
    searchUsersSuccess, searchRepoSuccess, resetLoadMore
} from '../types';
interface LoadingState {
    loading: boolean,
    error: boolean,
    loadMore: boolean
}
const initialState: LoadingState = {
    loading: false,
    error: false,
    loadMore: true,
}

export const loadingReducer = (state: LoadingState = initialState, action:
    loaderEnd | loaderStart | searchresultsFailure | searchRepoSuccess | searchUsersSuccess | resetLoadMore) => {
    switch (action.type) {
        case SEARCH_RESULTS_LOADING_START:
            return { ...state, loading: true, error: false, loadMore: true }
        case SEARCH_RESULTS_LOADING_END:
            return { ...state, loading: false }
        case SEARCH_USERS_SUCCESS:
            return { ...state, error: false, loadMore: true }
        case SEARCH_REPO_SUCCESS:
            return { ...state, error: false, loadMore: true }
        case SEARCH_RESULTS_FAILURE:
            return { ...state, error: true }
        case UNSET_LOAD_MORE:
            return { ...state, loadMore: false }
        default:
            return state;
    }
}
