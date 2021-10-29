import React from 'react';
import quote from '../../../images/quote.jpg'

const Quote = () => {
    return (
        <div className="container">
            <h1 className="text-center mb-5 mt-5"><span className="text-success fw-bold">Get</span> instant quote</h1>
            <div className="row d-flex justify-content-center">
                <div className="col-md-8">
                    <form class="row g-3">
                        <div className="row mb-3">
                            <div class="col-md-6">
                                <label for="fromState" class="form-label">From</label>
                                <select id="fromState" class="form-select">
                                    <option selected>Choose...</option>
                                    <option selected>Bangladesh</option>
                                    <option>India</option>
                                    <option>Pakistan</option>
                                    <option>Japan</option>
                                </select>
                            </div>
                            <div class="col-md-3">
                                <label for="postCode" class="form-label">Postcode</label>
                                <input type="text" class="form-control" id="postCode" />
                            </div>
                        </div>
                        <div className="row mb-2">
                            <div class="col-md-6">
                                <label for="toState" class="form-label">To</label>
                                <select id="toState" class="form-select">
                                    <option selected>Choose...</option>
                                    <option>India</option>
                                    <option>Pakistan</option>
                                    <option>Japan</option>
                                </select>
                            </div>
                            <div class="col-md-3">
                                <label for="postCode2" class="form-label">Postcode</label>
                                <input type="text" class="form-control" id="postCode2" />
                            </div>
                        </div>

                        <h4>Your package details</h4>
                        <div class="col-md-2 me-4">
                            <label for="inputWeight" class="form-label">Weight</label>
                            <div>
                                <input type="text" class="form-control" id="inputWeight" />
                            </div>
                        </div>
                        <div class="col-md-2 me-4">
                            <label for="inputLength" class="form-label">Length</label>
                            <div>
                                <input type="text" class="form-control" id="inputLength" />
                            </div>
                        </div>
                        <div class="col-md-2 me-4">
                            <label for="inputWidth" class="form-label">Width</label>
                            <div>
                                <input type="text" class="form-control" id="inputWidth" />
                            </div>
                        </div>
                        <div class="col-md-2">
                            <label for="inputHeight" class="form-label">Height</label>
                            <div>
                                <input type="text" class="form-control" id="inputHeight" />
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="gridCheck" />
                                <label class="form-check-label" for="gridCheck">
                                    Sending Documents
                                </label>
                            </div>
                        </div>
                        <div class="col-12">
                            <button type="button" class="btn btn-primary px-5">Quote me now</button>
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