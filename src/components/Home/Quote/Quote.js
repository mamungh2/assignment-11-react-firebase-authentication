import React from 'react';
import quote from '../../../images/quote.jpg'

const Quote = () => {
    return (
        <div className="container">
            <h1 className="text-center mb-5 mt-5"><span className="text-success fw-bold">Get</span> instant quote</h1>
            <div className="row d-flex justify-content-center">
                <div className="col-md-8">
                    <form className="row g-3">
                        <div className="row mb-3">
                            <div className="col-md-6">
                                <label htmlFor="fromState" className="form-label">From</label>
                                <select id="fromState" className="form-select">
                                    <option>Choose...</option>
                                    <option defaultValue>Bangladesh</option>
                                    <option>India</option>
                                    <option>Pakistan</option>
                                    <option>Japan</option>
                                </select>
                            </div>
                            <div className="col-md-3">
                                <label htmlFor="postCode" className="form-label">Postcode</label>
                                <input type="text" className="form-control" id="postCode" />
                            </div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-md-6">
                                <label htmlFor="toState" className="form-label">To</label>
                                <select id="toState" className="form-select">
                                    <option defaultValue>Choose...</option>
                                    <option>India</option>
                                    <option>Pakistan</option>
                                    <option>Japan</option>
                                </select>
                            </div>
                            <div className="col-md-3">
                                <label htmlFor="postCode2" className="form-label">Postcode</label>
                                <input type="text" className="form-control" id="postCode2" />
                            </div>
                        </div>

                        <h4>Your package details</h4>
                        <div className="col-md-2 me-4">
                            <label htmlFor="inputWeight" className="form-label">Weight</label>
                            <div>
                                <input type="text" className="form-control" id="inputWeight" />
                            </div>
                        </div>
                        <div className="col-md-2 me-4">
                            <label htmlFor="inputLength" className="form-label">Length</label>
                            <div>
                                <input type="text" className="form-control" id="inputLength" />
                            </div>
                        </div>
                        <div className="col-md-2 me-4">
                            <label htmlFor="inputWidth" className="form-label">Width</label>
                            <div>
                                <input type="text" className="form-control" id="inputWidth" />
                            </div>
                        </div>
                        <div className="col-md-2">
                            <label htmlFor="inputHeight" className="form-label">Height</label>
                            <div>
                                <input type="text" className="form-control" id="inputHeight" />
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="gridCheck" />
                                <label className="form-check-label" htmlFor="gridCheck">
                                    Sending Documents
                                </label>
                            </div>
                        </div>
                        <div className="col-12">
                            <button type="button" className="btn btn-primary px-5">Quote me now</button>
                        </div>
                    </form>
                </div>
                <div className="col-md-4">
                    <img className="img-fluid" src={quote} alt="" />
                </div>
            </div>

        </div>
    );
};

export default Quote;