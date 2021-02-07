import React, { ReactElement } from 'react'
import { repo } from '../../store/types'
import star from '../../resources/star.png';
import { dateFormat } from '../../common/dateUtil'
import './styles.css';
interface Props {
    repo: repo
}

export default function RepoDetails({ repo }: Props): ReactElement {


    return (
        <div className="repo-details">
            <div className="repo-detail-box">
                <div className="repo-name">
                    <a href={repo.html_url} className="repo-link">
                        {repo.full_name}
                    </a>
                    <span className="repo-desc">{repo.description && (repo.description.length > 100 ? `${repo.description.substring(0, 100)}...` : repo.description)}</span>
                </div>
                <div className="repo-desc owner">
                    {`Created by `}<a href={repo.owner.html_url}>{repo.owner.login}</a>
                </div>
                <div className="repo-details-bottom">
                    <div className="repo-content">
                        <img src={star} alt="star icon" className="repo-star" />
                        <span>{repo.stargazers_count}</span>
                    </div>
                    <span className="repo-content-left">{repo.language}</span>
                    <span className="repo-content-left">{repo.updated_at && `Updated on ${dateFormat(repo.updated_at)}`}</span>
                </div>
            </div>
        </div>
    )
}
