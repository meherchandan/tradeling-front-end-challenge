import React, { ReactElement } from 'react'
import { user } from '../../store/types';
import { dateFormat } from '../../common/dateUtil'
import './styles.css';
interface Props {
    user: user
}

export default function index({ user }: Props): ReactElement {
    return (
        <div className="user-details">
            <div className="user-details-box">
                <div className="user-avatar-box">
                    <img className="user-avatar" src={user.avatar_url} alt="user avatar" />
                </div>


                <div className="user-desc">
                    <a href={user.html_url}>
                        {user.login}
                    </a>
                    {user.location && <span className="user-location"> {user.location}</span>}
                </div>
            </div>
            <div className="user-details-bottom">
                <div className="user-bio">{user.bio && (user.bio.length > 75 ? `${user.bio.substring(0, 75)}...` : user.bio)}</div>
                <div className="user-follow-details">
                    <div className="user-content">Public repos: {user.public_repos}</div>
                    <div className="user-content-left">Followers: {user.followers}</div>
                    <div className="user-content-left">Following: {user.following}</div>
                </div>
                <div className="user-follow-details">
                    <div className="user-content">{user.created_at && `Member since ${dateFormat(user.created_at)}`}</div>
                </div>
            </div>

        </div>
    )
}
