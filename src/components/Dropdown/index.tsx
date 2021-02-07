import React, { ReactElement, useState, useRef, useEffect } from 'react'
import './styles.css';
interface Props {
    values: string[],
    handleChange: (text: string) => void,
    selectedValue: string,
}

export default function Dropdown({ values, handleChange, selectedValue }: Props): ReactElement {
    const [isOpen, setisOpen] = useState(false);
    const dropdownRef: React.RefObject<HTMLDivElement> = useRef(null);

    function handleClickOutside(event: any) {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setisOpen(false);
        }
    }
    useEffect(() => {
        // Attach the event listener to handle outside click
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Remove  event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownRef]);

    return (
        <div ref={dropdownRef} className={`dropdown ${isOpen ? 'open' : ''}`}>
            <button className="dropdown-toggle" type="button" onClick={() => setisOpen(!isOpen)}>
                {selectedValue}
                <span className="caret-icon"></span>
            </button>
            <ul className={`dropdown-menu`}>
                {values.length > 0 && values.map((value, index) => {
                    return <li
                        key={index}
                        value={value}
                        onClick={(e) => {
                            handleChange(value);
                            setisOpen(false);
                        }}
                    >
                        <span>{value}</span>
                    </li>
                })}
            </ul>
        </div>


        // <>
        //     <select value={selectedValue}
        //         onChange={(e) => handleChange(e.target.value)} >
        //         {
        //             values && values.map((value, idx) => <option key={idx} value={value}>{value}</option>)
        //         }

        //     </select>
        // </>
    )
}
