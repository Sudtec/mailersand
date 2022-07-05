import React from 'react'
import { Link } from "react-router-dom";
import { ReactComponent as Menubar } from '../images/menubar.svg'
import { ReactComponent as Logo } from '../images/RealEstatelogo.svg';
import { ReactComponent as Search } from '../images/search.svg';
import Scrollspy from 'react-scrollspy';


const HomeNavbar = () => {
    const logIn = () => {

    }
    return (
        <div className="homeNavarContainer container-fluid">
            <div className='container'>

                <nav className="navbar navbar-expand-lg navbar-light ">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                            <Menubar className="navbar-toggler-icon" />
                        </button>
                        <Link className="navbar-brand" to="#">
                            <Logo />
                        </Link>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">


                            <ul className="navbar-nav  mb-2 mb-lg-0" >
                                <li className="nav-item">
                                    <a className="nav-link" href="#intro" data-toggle="collapse" data-target=".navbar-collapse.show">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#how" data-toggle="collapse" data-target=".navbar-collapse.show">About Us</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#testimonial" data-toggle="collapse" data-target=".navbar-collapse.show">Testimonial</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#faq" data-toggle="collapse" data-target=".navbar-collapse.show">FAQ</a>
                                </li>
                            </ul>




                            <div className="d-flex">
                                <div className="formControlContainer">
                                    <Search className='searchIcon' />
                                    <input className="formControl me-2" type="search" placeholder="Search....." aria-label="Search" />
                                </div>
                                <Link className="navBtn" to="/login" type="submit"onClick={logIn}>Log in</Link>
                            </div>
                        </div>

                    </div>
                </nav>
            </div>
        </div>
    )
}

export default HomeNavbar