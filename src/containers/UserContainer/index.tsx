import React, { ReactElement } from 'react'
import { user } from '../../store/types'
import UserDetails from '../../components/UserDetails'
import './styles.css';
interface Props {
    users: user[]
}

export default function index({ users }: Props): ReactElement {
    return (
        <div className="user-container">
            {
                users && users.length > 0 && users.map((user, idx) => <UserDetails user={user} key={idx} />)
            }
        </div>
    )
}
