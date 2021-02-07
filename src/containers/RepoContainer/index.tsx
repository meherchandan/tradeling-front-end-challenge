import React, { ReactElement } from 'react'
import { repo } from '../../store/types'
import RepoDetails from '../../components/RepoDetails'
import './styles.css';
interface Props {
    repos: repo[]
}

export default function RepoContainer({ repos }: Props): ReactElement {
    return (
        <div className="repo-container">
            {
                repos && repos.length > 0 && repos.map((repo, idx) => <RepoDetails repo={repo} key={idx} />)
            }
        </div>
    )
}
