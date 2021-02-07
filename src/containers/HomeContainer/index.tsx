import React, { ReactElement, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import debounce from 'lodash.debounce';
import { AppState } from '../../store/reducers';
import searchLogo from '../../resources/GitHub-Mark.png';
import ResultContainer from '../ResultContainer'
import {
    DROPDOWN_ENTITIES,
    SEARCH_PLACEHOLDER,
    USERS_LABEL,
    REPO_LABEL
} from '../../config';
import InputField from '../../components/InputField';
import { getUsersResult } from '../../store/actions/userSearchAction';
import { getRepositoryResult } from '../../store/actions/repositorySearchAction';
import Dropdown from '../../components/Dropdown';
import './styles.css';

export default function HomeContainer(): ReactElement {
    const dispatch = useDispatch();
    const { user, repo, loader } = useSelector((state: AppState) => state);
    const [searchText, setSearchText] = useState('');
    const dropdownValues = DROPDOWN_ENTITIES;
    const [selectedFilter, setSelectedFilter] = useState(dropdownValues[0]);
    const [pageNumber, setPageNumber] = useState(1);
    /** ******* UseEffect *****
     * side-effect to do api call to fetch new records when user changes the entities
     * from user to repo
     */
    useEffect(() => {
        search(searchText, 1);
    }, [selectedFilter])
    /**
     * 
     * @param store - user/repo store
     * @param userActionfunc - redux action to call for repo or user fetch
     * @param searchText - search term
     * @param pageNumber 
     */
    const searchHandler = (store: any, userActionfunc: (s: string, p: number) => void, searchText: string, pageNumber: number) => {
        const storeData = store[searchText.toLowerCase()];
        if (storeData && storeData.pageNumber < pageNumber) {
            dispatch(userActionfunc(searchText.toLowerCase(), pageNumber))
        }
        if (storeData && storeData.pageNumber > pageNumber) {
            setPageNumber(storeData.pageNumber)
        } else if (!storeData) {
            dispatch(userActionfunc(searchText.toLowerCase(), pageNumber))
            setPageNumber(1);
        }
    }
    /**
     * @param searchText
     * @param pageNumber
     * Search for results by api call if search term length is greater than 3. 
     * debounce function will delay the search by defined seconds
     */
    const search = (searchText: string, pageNumber: number) => {
        if (searchText.length > 3) {
            if (selectedFilter === USERS_LABEL) {
                searchHandler(user, getUsersResult, searchText, pageNumber);
            }
            else if (selectedFilter === REPO_LABEL) {
                searchHandler(repo, getRepositoryResult, searchText, pageNumber);
            }
        }
    };
    /**
     * @param text 
     * Text field handler to update the text field and call debouncer search 
     * to get the results
     */
    const handleTextField = (text: string) => {
        setSearchText(text);
        setPageNumber(1)
        debounce((text, pageNumber) => search(text, pageNumber), 2000)(text, pageNumber);
    }
    /**
     * @param text - selected dropdown value
     * Select dropdown handler for filter
     */
    const handleDropdown = (text: string) => {
        setSelectedFilter(text);
        setPageNumber(1);
    }

    /**
     * handleLoadMore button handler - increase pagenumber by 1 and run search function 
     * to get new results
     */
    const handleLoadMore = (event: React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
        const page = pageNumber;
        setPageNumber(page + 1)
        search(searchText, page + 1)
    }

    /**
     * set the data value as per the filter selection
     */
    let data;
    if (searchText.length > 3) {
        if (selectedFilter === USERS_LABEL && user[searchText.toLowerCase()]) {
            data = user[searchText.toLowerCase()].data;
        }
        if (selectedFilter === REPO_LABEL && repo[searchText.toLowerCase()]) {
            data = repo[searchText.toLowerCase()].data;
        }

    }
    return (
        <div className={`homepage-container${searchText.length > 0 ? '-edit' : ''}`} >
            <div >
                <div className="search-box-header">
                    <div>

                        <img src={searchLogo} className="logo" alt="github search logo" />
                    </div>
                    <div className="search--box-details">

                        <h3 className="search-title">GitHub Searcher</h3>
                        <p className="search-desc"> Search users or repository below</p>
                    </div>
                </div>
                <div className="search-box-container">
                    <div>
                        <InputField className="input-search" placeholder={SEARCH_PLACEHOLDER} handleSearch={handleTextField} searchText={searchText} />
                    </div>
                    <div className="selection-box">
                        <Dropdown values={dropdownValues} handleChange={handleDropdown} selectedValue={selectedFilter} />
                    </div>
                </div>
            </div>
            {
                searchText.length > 3 && <ResultContainer loadMore={loader.loadMore} error={loader.error} filter={selectedFilter} data={data} loader={loader.loading} handleLoadMore={handleLoadMore} />
            }

        </div>
    )
}
