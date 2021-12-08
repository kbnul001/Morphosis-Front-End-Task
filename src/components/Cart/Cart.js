import React, { useState } from 'react';
import CartItem from '../CartItem/CartItem';

const Cart = ({ cart }) => {

    return (
        <div className="">
            <h1 className="text-2xl font-bold">Your Cart</h1>
            <h3 className="">Robots Ordered: {cart.length}</h3>
            {
                cart.map(item => <CartItem
                    product={item}
                ></CartItem>)
            }
            <h3 className="">Total Amount: </h3>

        </div>
    );
};

export default Cart;