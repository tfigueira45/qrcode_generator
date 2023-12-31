import React, { useRef, useState, useEffect } from "react";
import arrowBottom from "../../assets/icons/arrowBottom.svg";
import "./DropdownMenu.css";


function DropdownMenu({options, handleSelect, className}) {
    
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
                {values.map((item, i) => {
                    return <li className="m-10" key={i} translate="no" onClick={handleClick}>{item}</li>
                })}
            </ul>
        )
    }

    const DropBtn = () => {
        const handleClick = () => {
            setShowOptions(prev => !prev)
        }

        return (
            <div className="dropBtn centered rounded fz-18 wd-100" onClick={handleClick}>
                <span>{data}</span>
                <img  src={arrowBottom} alt="arrownBottom" />
            </div>
        )
    }

    return (
        <nav className={`centered column ${className}`}>
            <DropBtn />
            <Menu values={options} />
        </nav>
    )
}

export default DropdownMenu;