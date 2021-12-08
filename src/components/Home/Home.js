import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Context/ContextProvider';
import Cart from '../Cart/Cart';
import Shop from '../Shop/Shop';

const Home = () => {
    const [cart, setCart] = useState([]);
    const { products, setProducts } = useContext(AuthContext);

    //reduce stock after adding to cart
    const reduceStock = (name) => {
        const itemToReduce = products.find(item => name === item.name);
        itemToReduce.stock--;
    }

    const handleDecreaseItem = (name) => {
        let newCart = [...cart];
        //recover to stock
        const itemToReduceStock = products.find(item => name === item.name);
        itemToReduceStock.stock++;
        //remove from cart
        const itemToReduce = newCart.find(item => name === item.name);
        itemToReduce.quantity--;
        if (itemToReduce.quantity === 0) {
            newCart = newCart.filter(item => item.name !== name);
        }
        setCart(newCart);
    }

    const handleIncreaseItem = (name) => {
        //remove from stock
        const item = products.find(pd => pd.name === name);
        handleAddtoCart(item);
        //add to cart
        // let newCart = [...cart];
        // const itemToIncrease = newCart.find(item => name === item.name);
        // itemToIncrease.quantity++;
        // setCart(newCart);
    }

    // handle add to cart
    const handleAddtoCart = (product) => {

        const newCart = [...cart];
        const existItem = newCart.find(item => item.name == product.name);
        if (existItem) {
            existItem.quantity += 1;
            reduceStock(existItem?.name);
        }
        else {
            if (cart.length >= 5) {
                alert("You can not add more than 5 different robots.");
                return;
            }
            const newItem = { ...product };
            newItem.quantity = 1;
            newCart.push(newItem);
            reduceStock(newItem?.name);
        }
        setCart(newCart);
    }

    return (
        <div className="flex flex-col-reverse md:flex-row">
            <section className="md:w-2/3 md:mx-12 mx-4">
                <Shop
                    cart={cart}
                    handleAddtoCart={handleAddtoCart}></Shop>
            </section>
            <aside className="md:w-1/4 pl-5 border-l-2 md:fixed right-6 mb-8">
                <Cart
                    handleIncreaseItem={handleIncreaseItem}
                    handleDecreaseItem={handleDecreaseItem}
                    cart={cart}></Cart>
            </aside>
        </div>
    );
};

export default Home;