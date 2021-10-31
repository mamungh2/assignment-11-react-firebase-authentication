import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Order from '../ManageAllOrders/Order/Order';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const { user } = useAuth();

    const displayName = user.displayName;
    const loggedInUser = { name: displayName };
    const valueArr = Object.values(loggedInUser);

    useEffect(() => {
        fetch('https://ghastly-mummy-59087.herokuapp.com/orders/byNames', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(valueArr)
        })
            .then(res => res.json())
            .then(orders => {
                setOrders(orders);
            })
    }, [orders]);

    return (
        <div>
            <h1 className="text-center mt-4 mb-3">My orders</h1>
            {
                orders.map(order => <Order key={order._id} order={order}></Order>)
            }
        </div>
    );
};

export default MyOrders;