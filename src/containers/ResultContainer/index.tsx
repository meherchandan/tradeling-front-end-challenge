import React, { ReactElement } from 'react'
import Button from '../../components/Button';
import UserContainer from '../UserContainer';
import RepoContainer from '../RepoContainer';
import { USERS_LABEL, REPO_LABEL } from '../../config'
import { repo, user } from '../../store/types';
import './styles.css';
interface Props {
    handleLoadMore: (event: React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => void,
    filter: string,
    data: user[] | repo[] | any,
    loader: boolean,
    error: boolean,
    loadMore: boolean
}

export default function ResultContainer({ handleLoadMore, loadMore, error, filter, data, loader }: Props): ReactElement {
    console.log("loadMore ", loadMore);
    console.log(" data && data.length > 0 ", data && data.length > 0);
    return (
        <>
            <div>

                {
                    filter === USERS_LABEL && data && <UserContainer users={data} />
                }
                {
                    filter === REPO_LABEL && data && <RepoContainer repos={data} />
                }
                {
                    loader && <div className="not-found">Loading</div>
                }
            </div>
            {

                !loader && data && data.length > 0 && loadMore && <Button label="Load More" handleClick={handleLoadMore} />
            }
            {
                !error && data && data.length === 0 && <div className="not-found">No Result found. Please modify your search.</div>
            }
            {
                error && <div className="error">Some error occured. Please try again</div>
            }

        </>
    )
}
