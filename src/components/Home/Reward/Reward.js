import React from 'react';
import reward from '../../../images/reward2.jpg';

const Reward = () => {
    return (
        <div className="container mt-5">
            <h1 className="text-center">Get rewarded, and make your friends <span className="text-danger">love</span> <span className="text-success fw-bold">you!</span></h1>
            <p>Give your friend 20% off their first booking, and after your friend has redeemed their referral booking discount, you will receive a further 10% off your already discounted Transdirect Member rates, for your next booking.</p>
            <div className="row">
                <div className="col-md-5 bg-white">
                    <img className="bg-white w-75 " src={reward} alt="" />
                </div>
                <div className="col-md-7">
                    <form className="row">
                        <div className="col-md-6 mt-3">
                            <h4>Your details:</h4>
                            <div className="col-md-10 mb-3">
                                <input type="text" className="form-control" placeholder="Name" />
                            </div>
                            <div className="col-md-10 mb-3">
                                <input type="email" className="form-control" placeholder="Email" />
                            </div>
                            <div className="col-md-10">
                                <input type="password" className="form-control" placeholder="Password" />
                            </div>
                        </div>
                        <div className="col-md-6 mt-3">
                            <h4>Your friend's details:</h4>
                            <div className="col-md-10 mb-3">
                                <input type="text" className="form-control" placeholder="Name" />
                            </div>
                            <div className="col-md-10">
                                <input type="email" className="form-control" placeholder="Email" />
                            </div>
                        </div>
                        <div className="col-12 text-center">
                            <button type="button" className="btn btn-primary px-5 mt-4">Sign up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Reward;