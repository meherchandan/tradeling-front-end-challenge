import { SEARCH_REPO_SUCCESS, repo } from '../types'
import { Dispatch } from 'redux';
import { getApi, param } from '../../common/apiHelper'
import { RESULT_PER_PAGE } from '../../config'

import { loadingStart, loadingEnd, errorOccured } from './loadingAction';
export const getRepositoryResult = (searchText: string, page: number = 1) => async (dispatch: Dispatch) => {
    try {
        dispatch(loadingStart());
        const params: param = { q: searchText, per_page: RESULT_PER_PAGE, page }
        const payload = await getApi("/search/repositories", params)
        let newPayload: repo[] = payload.items.map((item: repo) => {
            const { full_name, owner, html_url, description, url, created_at, updated_at, stargazers_count, language } = item;
            if (!full_name) {
                throw Error();
            }
            return { full_name, owner, html_url, description, url, created_at, updated_at, stargazers_count, language }
        })
        Promise.all(newPayload).then((data: repo[]) => {
            dispatch(repoSuccessPayload(data, searchText, page));
            dispatch(loadingEnd());
        }).catch(() => {
            dispatch(errorOccured());
            dispatch(loadingEnd());
        });
    }
    catch (e) {
        console.error(e);
        dispatch(errorOccured());
        dispatch(loadingEnd());
    }
}

function repoSuccessPayload(payload: repo[], searchText: string, pageNumber: number) {
    return {
        type: SEARCH_REPO_SUCCESS,
        payload: {
            repos: payload,
            searchText,
            pageNumber
        }
    }
}