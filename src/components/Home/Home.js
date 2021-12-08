import React from 'react';
import Cart from '../Cart/Cart';
import Shop from '../Shop/Shop';

const Home = () => {
    return (
        <div className="flex">
            <section className="w-3/5">
                <Shop></Shop>
            </section>
            <aside className="w-2/5 pl-5 border-l-2">
                <Cart></Cart>
            </aside>
        </div>
    );
};

export default Home;