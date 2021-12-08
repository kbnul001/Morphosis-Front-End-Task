import React from 'react';

const CartItem = (props) => {
    const { name, price, quantity, stock } = props.product;
    const { handleDecreaseItem, handleIncreaseItem } = props;
    const totalPrice = parseFloat(price) * parseInt(quantity)
    return (
        <>
            <td className="w-1/2 text-center">{name}</td>
            <td className="w-1/4 pt-4 text-center ">
                <button disabled={quantity === 0} onClick={() => handleDecreaseItem(name)} ><i className="fas fa-minus"></i></button>
                <span className="border-2 p-1 mx-2">{quantity}</span>
                <button disabled={stock === quantity} onClick={() => handleIncreaseItem(name)}><i className="fas fa-plus text-center"></i></button></td>
            <td className="w-1/4 text-center">{price}</td>
        </>
    );
};

export default CartItem;