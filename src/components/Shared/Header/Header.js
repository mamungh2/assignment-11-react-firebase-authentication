import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import navlogo from '../../../images/navlogo.jpg';
import './Header.css';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div className="header">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <div className="header-logo mx-3">
                        <img className="img-fluid" src={navlogo} alt="" />
                    </div>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex align-items-center">
                            <li className="nav-item me-1">
                                <NavLink className="nav-link active" aria-current="page" to="/home" activeStyle={{
                                    fontWeight: "bold",
                                    color: "red",
                                    borderBottom: "2px solid red"
                                }}>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/services" activeStyle={{
                                    fontWeight: "bold",
                                    color: "red",
                                    borderBottom: "2px solid red"
                                }}>Services</NavLink>
                            </li>
                        </ul>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center">
                            {
                                !user?.displayName ?
                                    <li className="nav-item me-1">
                                        <NavLink className="nav-link" to="/login" activeStyle={{
                                            fontWeight: "bold",
                                            color: "red",
                                            borderBottom: "2px solid red"
                                        }}>Login</NavLink>
                                    </li> :

                                    <div className="d-flex">
                                        <img className="userImg" src={user.photoURL} alt="" />
                                        <li className="nav-item">
                                            <span className="me-1 text-success">{user?.displayName}</span>
                                            <button onClick={logOut} className="btn btn-primary btn-sm fs-6">Logout</button>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="m-0 nav-link d-inline" to="/myorders" activeStyle={{
                                                fontWeight: "bold",
                                                color: "red",
                                                borderBottom: "2px solid red"
                                            }}><small>My orders</small></NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link d-inline" to="/manageallorders" activeStyle={{
                                                fontWeight: "bold",
                                                color: "red",
                                                borderBottom: "2px solid red"
                                            }}><small>Manage all orders</small></NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link d-inline" to="/addservice" activeStyle={{
                                                fontWeight: "bold",
                                                color: "red",
                                                borderBottom: "2px solid red"
                                            }}><small>Add a service</small></NavLink>
                                        </li>
                                    </div>
                            }
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2 w-50" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;