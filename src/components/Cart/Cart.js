import React, { useState } from 'react';

const Cart = ({ cart }) => {
    console.log(cart);

    return (
        <div className="">
            <h1 className="text-2xl font-bold">Your Cart</h1>
            <h3 className="">Total:</h3>
            <h3 className="">Robots Ordered: {cart.length}</h3>
            <h3 className="">Total Amount: </h3>

        </div>
    );
};

export default Cart;