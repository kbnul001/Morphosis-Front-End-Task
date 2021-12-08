import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Context/ContextProvider';
import useProducts from '../../cutomhooks/useProducts';
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
        <div className="md:flex">
            <section className="w-2/3 md:mx-12 ">
                <Shop
                    cart={cart}
                    handleAddtoCart={handleAddtoCart}></Shop>
            </section>
            <aside className="w-1/4 pl-5 border-l-2 fixed right-0">
                <Cart cart={cart}></Cart>
            </aside>
        </div>
    );
};

export default Home;