import React from 'react'
import Logo from '../../../utils/imgs/logo.png'
import * as Icon from "react-bootstrap-icons";
import { Link } from 'react-router-dom';


const EmptyNavbar = () => {

    return (
        <div>
            <header className=" text-bg-dark">
                <div className="">
                    <nav className="navbar navbar-expand-lg shadow-0 ">
                        <a href="/" className="navbar-brand">
                            <img src={Logo} height='50' alt='logo' />
                        </a>
                        <button
                            className="navbar-toggler text-light"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <Icon.MenuButtonWide />
                        </button>

                    </nav>
                </div>
            </header>
        </div>
    )
}

export default EmptyNavbar
