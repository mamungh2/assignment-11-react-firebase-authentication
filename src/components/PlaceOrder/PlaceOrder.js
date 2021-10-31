import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const PlaceOrder = () => {
    const [service, setService] = useState({});
    const { user } = useAuth();
    const nameRef = useRef();
    const emailRef = useRef();
    const address1Ref = useRef();
    const address2Ref = useRef();
    const phoneRef = useRef();

    const { serviceId } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, []);

    const handleSubmit = e => {
        e.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const address1 = address1Ref.current.value;
        const address2 = address2Ref.current.value;
        const phone = phoneRef.current.value;
        const newOrder = { name, email, address1, address2, phone };
        newOrder.serviceRef = service._id;

        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newOrder)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Order placed successfully');
                    e.target.reset();
                }
            })
    }

    return (
        <div className="container">
            <h2 className="text-center mt-4 mb-3">Confirm your order</h2>
            <div className="row">
                <div className="col-md-7">
                    <h5 className="mb-3">Your service details :</h5>
                    <h4>{service.title}</h4>
                    <p>{service.description}</p>
                    <h5>Price: Starting from ${service.price}</h5>
                </div>
                <div className="col-md-5">
                    <form onSubmit={handleSubmit}>
                        <div className="row mb-2">
                            <div className="col-md-9 mx-auto">
                                <input type="text" ref={nameRef} defaultValue={user.displayName} className="form-control" />
                            </div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-md-9 mx-auto">
                                <input type="text" ref={emailRef} defaultValue={user.providerData[0].email} className="form-control" />
                            </div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-md-9 mx-auto">
                                <input type="text" ref={address1Ref} className="form-control" placeholder="Address1" />
                            </div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-md-9 mx-auto">
                                <input type="text" ref={address2Ref} className="form-control" placeholder="Address2" />
                            </div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-md-9 mx-auto">
                                <input type="text" ref={phoneRef} className="form-control" placeholder="Phone number" />
                            </div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-md-9 mx-auto">
                                <input type="submit" className="btn btn-primary form-control mt-3" value="Submit order" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PlaceOrder;