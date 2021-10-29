import React from 'react';
import login from '../../images/login.jpg';

const Login = () => {
    return (
        <div className="container d-flex align-items-center">

            <div className="w-50">
                <img className="w-75" src={login} alt="" />
            </div>
            <form className="w-50">
                <h1><span className="text-success">Please</span> log in</h1>
                <div className="row mt-3 g-3">
                    <div className="col-md-8">
                        <input type="email" className="form-control" placeholder="Email" required />
                    </div>
                    <div className="col-md-8">
                        <input type="password" className="form-control" placeholder="Password" required />
                    </div>
                    <div className="col-md-8">
                        <button type="button" className="btn btn-primary">Sign in</button>
                    </div>
                    <p className="mb-0">---or---</p>
                    <div className="col-md-8">
                        <button type="button" className="btn btn-primary">Sign in with Google</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;