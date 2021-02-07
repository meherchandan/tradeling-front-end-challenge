import React, { ReactElement } from 'react'

interface Props {
    placeholder: string,
    handleSearch: (searchText: string) => void,
    searchText: string,
    className: string,
}

export default function InputField({ className, searchText, placeholder, handleSearch }: Props): ReactElement {

    return (
        <>
            <input type="text"
                placeholder={placeholder}
                className={className}
                value={searchText}
                onChange={(e) => {
                    handleSearch(e.target.value)
                }} />
        </>
    )
}
