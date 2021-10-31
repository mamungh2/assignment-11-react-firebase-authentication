import React, { useEffect, useState } from 'react';
import Order from './Order/Order';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
            .catch(console.dir);
    }, [orders]);

    return (
        <div className="container mt-4">
            <h2 className="text-center mb-3">Manage all orders</h2>
            {
                orders.map(order => <Order key={order._id} order={order}></Order>)
            }
        </div>
    );
};

export default ManageAllOrders;