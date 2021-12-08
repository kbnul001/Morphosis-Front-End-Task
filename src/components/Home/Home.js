import React from 'react';
import Cart from '../Cart/Cart';
import Shop from '../Shop/Shop';

const Home = () => {
    return (
        <div className="md:flex">
            <section className="w-4/5 md:mx-12 pr-12">
                <Shop></Shop>
            </section>
            <aside className="w-1/6 pl-5 border-l-2 fixed right-0">
                <Cart></Cart>
            </aside>
        </div>
    );
};

export default Home;