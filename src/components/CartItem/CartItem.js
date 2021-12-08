import React from 'react';

const CartItem = (props) => {
    const { name, price, quantity } = props.product;
    const totalPrice = parseFloat(price) * parseInt(quantity)
    return (
        <div>
            <p>{name} {price} X {quantity} = {totalPrice}</p>
        </div>
    );
};

export default CartItem;