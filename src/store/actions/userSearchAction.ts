import {
    SEARCH_USERS_SUCCESS,
    user
} from '../types'
import { loadingStart, loadingEnd, errorOccured, loadMoreUnset } from './loadingAction';
import { Dispatch } from 'redux';
import { getApi, param } from '../../common/apiHelper'
import { RESULT_PER_PAGE } from '../../config'
export const getUsersResult = (searchText: string, page: number = 1) => async (dispatch: Dispatch) => {
    try {
        dispatch(loadingStart());
        const params: param = { q: searchText, per_page: RESULT_PER_PAGE, page }
        const payload = await getApi("/search/users", params)
        let newPayload: user[] = await payload.items.map(async (item: user) => {
            const userData = await getApi(`/users/${item.login}`);
            const { login, url, html_url, avatar_url, type, repos_url, location, email, bio, followers, following, created_at, public_repos } = userData;
            if (!login) {
                throw Error();
            }
            return { login, url, html_url, avatar_url, type, repos_url, location, email, bio, followers, following, created_at, public_repos }
        })
        Promise.all(newPayload).then((data: user[]) => {
            dispatch(loadingEnd());
            if (data.length > 0) {
                dispatch(userSuccessPayload(data, searchText, page));
            } else {
                dispatch(loadMoreUnset())
            }
        }).catch(() => {
            dispatch(errorOccured());
            dispatch(loadingEnd());
        })
    }
    catch (e) {
        console.error(e);
        dispatch(errorOccured());
        dispatch(loadingEnd());
    }
}

function userSuccessPayload(payload: user[], searchText: string, pageNumber: number) {
    return {
        type: SEARCH_USERS_SUCCESS,
        payload: {
            users: payload,
            searchText,
            pageNumber

        }
    }
}