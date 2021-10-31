import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { _id, title, description, image, price } = service;

    return (
        <div>
            <div className="col h-100">
                <div className="card h-100">
                    <img src={image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description.slice(0, 100)}</p>

                    </div>
                    <h4 className="text-center my-3"><small>Starting from</small> $ {price}</h4>
                    <div className="card-footer">
                        <Link to={`/placeorder/${_id}`}><button className="btn btn-primary mx-auto d-block">Book now</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;