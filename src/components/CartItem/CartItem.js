import React from 'react';

const CartItem = (props) => {
    const { name, price, quantity } = props.product;
    const totalPrice = parseFloat(price) * parseInt(quantity)
    return (
        <>
            <td className="w-1/2">{name}</td>
            <td className="w-1/4 pt-4 text-center ">
                <button><i class="fas fa-minus"></i></button>
                <span className="border-2 p-1 mx-2">{quantity}</span>
                <button><i class="fas fa-plus"></i></button></td>
            <td className="w-1/4 text-center">{price}</td>
        </>
    );
};

export default CartItem;