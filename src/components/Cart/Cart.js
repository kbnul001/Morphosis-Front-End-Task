import React, { useState } from 'react';
import CartItem from '../CartItem/CartItem';

const Cart = ({ cart }) => {

    const countTotalItems = () => {
        let count = 0;
        cart.forEach(item => {
            count = count + item.quantity;
        });
        return count;
    }
    const countTotalPrice = () => {
        let total = 0;
        cart.forEach(item => {
            total = total + item.quantity * item.price;
        })
        return total;
    }

    return (
        <div className="">
            <h1 className="text-2xl font-bold border-b-2 pb-2">Your Cart</h1>
            <h3 className="font-bold mt-3">Robots Ordered: {countTotalItems()}</h3>

            <table className="my-8 gap-3 ">
                <thead>
                    <tr>
                        <th className="w-1/2">Item Name</th>
                        <th className="w-1/4 ...">Quantity</th>
                        <th className="w-1/4 ...">Price(each)</th>
                    </tr>
                </thead>
                <tbody className="">
                    {
                        cart.map(item => <tr> <CartItem
                            product={item}
                        ></CartItem> </tr>)
                    }
                </tbody>
            </table>
            <h3 className="text-xl border-t-2 pt-3 ml-auto text-yellow-500 font-bold"> Total Price: &#3647; {countTotalPrice()}</h3>
        </div>
    );
};

export default Cart;