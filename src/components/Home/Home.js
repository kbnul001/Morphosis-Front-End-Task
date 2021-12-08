import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import Shop from '../Shop/Shop';

const Home = () => {
    const [cart, setCart] = useState([]);

    const handleAddtoCart = (product) => {
        const newCart = [...cart];
        const existItem = newCart.find(item => item.name == product.name);
        if (existItem) {
            existItem.quanity += 1;
        }
        else {
            const newItem = { ...product };
            newItem.quanity = 1;
            newCart.push(newItem);
        }
        setCart(newCart);
        console.log(cart);
    }

    return (
        <div className="md:flex">
            <section className="w-4/5 md:mx-12 pr-12">
                <Shop handleAddtoCart={handleAddtoCart}></Shop>
            </section>
            <aside className="w-1/6 pl-5 border-l-2 fixed right-0">
                <Cart cart={cart}></Cart>
            </aside>
        </div>
    );
};

export default Home;