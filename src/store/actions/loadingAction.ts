import {
    SEARCH_RESULTS_LOADING_START,
    SEARCH_RESULTS_LOADING_END,
    SEARCH_RESULTS_FAILURE,
    UNSET_LOAD_MORE
} from '../types'

export const loadingStart = () => {
    return {
        type: SEARCH_RESULTS_LOADING_START
    }
}
export const loadingEnd = () => {
    return {
        type: SEARCH_RESULTS_LOADING_END
    }
}
export const errorOccured = () => {
    return {
        type: SEARCH_RESULTS_FAILURE
    }
}
export const loadMoreUnset = () => {
    return {
        type: UNSET_LOAD_MORE
    }
}