import React from 'react';
import './nav.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {

    function closeMenuNav() {
        document.querySelector(".navigation").style.display = "none";
        document.querySelector(".menu-navigation").style.color = "black";
    }

    return (
        <div className="navigation">
            <div onClick={closeMenuNav} className="menu-close">
                <FontAwesomeIcon icon={faTimes} className="icon-close" />
                <p>CLOSE</p>
            </div>
        </div>
    );
};

export default Nav;