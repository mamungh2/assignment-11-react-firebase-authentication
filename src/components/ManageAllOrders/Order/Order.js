import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Order.css';

const Order = ({ order }) => {
    const [myOrder, setMyOrder] = useState({});
    const { _id, name, email, address1, address2, phone, serviceRef, status } = order;
    const location = useLocation();
    const currentLocation = location.pathname;
    console.log(currentLocation);

    const handleDeleteOrder = id => {
        const proceed = window.confirm("Are you sure to delete?");
        if (proceed) {
            fetch(`https://ghastly-mummy-59087.herokuapp.com/orders/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(result => {
                    if (result.deletedCount > 0) {
                        alert('Order deleted successfully');
                    }
                })
        }
    }

    useEffect(() => {
        fetch(`https://ghastly-mummy-59087.herokuapp.com/orders/${_id}`)
            .then(res => res.json())
            .then(data => setMyOrder(data))
    }, []);

    const handleStatus = id => {
        myOrder.status = 'approved';
        fetch(`https://ghastly-mummy-59087.herokuapp.com/orders/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(myOrder)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Order status changed');
                    setMyOrder({});
                }
            })
    }

    return (
        <div className="container order-item">
            <div className="mb-3 d-flex justify-content-between">
                <div className="p-3 pb-0">
                    <h5 className="">Order id: {_id}</h5>
                    <p className="">Customer name: {name}</p>
                    <p className="">Email: {email}</p>
                    <p className="">Address1: {address1}</p>
                    <p className="">Address2: {address2}</p>
                    <p className="">Phone: {phone}</p>
                    <p className="">ServiceRef: {serviceRef}</p>
                </div>
                <div className="d-flex flex-column justify-content-center mb-2">
                    <span className="fs-5 me-3 mb-3">Status: {status}</span>
                    <div className="changeStatus">
                        {
                            currentLocation === "/manageallorders" && <button onClick={() => handleStatus(_id)} className="btn btn-primary me-3 mb-3 px-4">Update status</button>
                        }
                    </div>
                    <button onClick={() => handleDeleteOrder(_id)} className="btn btn-primary px-4 me-3">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default Order;