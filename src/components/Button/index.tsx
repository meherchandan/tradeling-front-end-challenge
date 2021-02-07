import React, { ReactElement, } from 'react'
import './styles.css';
interface Props {
    label: string,
    handleClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export default function Button({ label, handleClick }: Props): ReactElement {
    return (
        <div className="button-container">
            <button className="button-box" onClick={handleClick}>
                {label}
            </button>
        </div>
    )
}
