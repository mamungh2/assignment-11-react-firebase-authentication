import React from 'react';
import { NavLink } from 'react-router-dom';
import navlogo from '../../../images/navlogo.jpg';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <div className="w-25 d-inline-block ms-3">
                        <img className="img-fluid d-block w-50" src={navlogo} alt="" />
                    </div>

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 d-flex align-items-center">
                            <li class="nav-item me-1">
                                <NavLink class="nav-link active" aria-current="page" to="/home" activeStyle={{
                                    fontWeight: "bold",
                                    color: "red",
                                    borderBottom: "2px solid red"
                                }}>Home</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink class="nav-link" to="/services" activeStyle={{
                                    fontWeight: "bold",
                                    color: "red",
                                    borderBottom: "2px solid red"
                                }}>Services</NavLink>
                            </li>
                        </ul>
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center">
                            <li class="nav-item me-1">
                                <NavLink class="nav-link" to="/login" activeStyle={{
                                    fontWeight: "bold",
                                    color: "red",
                                    borderBottom: "2px solid red"
                                }}>Login</NavLink>
                            </li>
                            <li class="nav-item me-1">
                                <NavLink class="nav-link" to="/manageallorder" activeStyle={{
                                    fontWeight: "bold",
                                    color: "red",
                                    borderBottom: "2px solid red"
                                }}>Manage all order</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink class="nav-link" to="/myorder" activeStyle={{
                                    fontWeight: "bold",
                                    color: "red",
                                    borderBottom: "2px solid red"
                                }}>My order</NavLink>
                            </li>
                        </ul>



                        <form class="d-flex">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;