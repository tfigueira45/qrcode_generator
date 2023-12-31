import React, { useRef, useState, useEffect } from "react";
import arrowBottom from "../../assets/icons/arrowBottom.svg";
import "./DropdownMenu.css";


function DropdownMenu({options, handleSelect}) {
    
    const [ data, setData ] = useState(options[0])
    const [showOptions, setShowOptions] = useState(false)

    const Menu = ({values}) => {
        const menuRef = useRef(null)

        const handleClick = ({target}) => {
            setData(target.innerText)
            handleSelect(target)
        }

        const hideMenu = () => {
            setShowOptions(false);
        };

        useEffect(() => {
            document.addEventListener('mousedown', handleClickOutside);
            return () => {
              document.removeEventListener('mousedown', handleClickOutside);
            };
        }, []);

        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
              hideMenu();
            }
        };

        return (
            <ul className={`${showOptions ? "show" : ""} p-5 rounded`} ref={menuRef} >
                {values.map(item => <li className="m-5" translate="no" onClick={handleClick}>{item}</li>)}
            </ul>
        )
    }

    const DropBtn = () => {
        const handleClick = () => {
            setShowOptions(prev => !prev)
        }

        return (
            <div className="dropBtn centered rounded" onClick={handleClick}>
                <span>{data}</span>
                <img  src={arrowBottom} alt="arrownBottom" />
            </div>
        )
    }

    return (
        <nav className="centered column">
            <DropBtn />
            <Menu values={options} />
        </nav>
    )
}

export default DropdownMenu;