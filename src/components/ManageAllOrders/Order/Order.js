import React from 'react';
import './Order.css';

const Order = ({ order }) => {
    const { _id, name, email, address1, address2, phone, serviceRef } = order;

    const handleDeleteOrder = id => {
        const proceed = window.confirm("Are you sure to delete?");
        if (proceed) {
            fetch(`http://localhost:5000/orders/${id}`, {
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
                <div className="d-flex align-items-end">
                    <button onClick={() => handleDeleteOrder(_id)} className="btn btn-primary px-4 me-3">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default Order;