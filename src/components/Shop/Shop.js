import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/ContextProvider';
import Product from '../Product/Product';

const Shop = (props) => {

    const { products } = useContext(AuthContext);
    const [searchedProducts, setSearchedProducts] = useState(products);

    useEffect(() => {
        setSearchedProducts(products)
    }, [products])


    const handleSearch = (e) => {
        const searchKey = e.target.value;
        const newProducts = products.filter(pd => pd.material.toLowerCase().includes(searchKey.toLowerCase()));
        setSearchedProducts(newProducts);
    }

    return (
        <div className="">
            {/* search bar */}
            <div className="relative    mb-16">
                <div className="absolute top-4 left-3"> <i className="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i> </div> <input onChange={handleSearch} type="text" className="focus:shadow focus:outline-none border h-14 pl-10 pr-20 rounded-lg z-0 w-full" placeholder="Search by material..." />

            </div>
            {/* products display */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {
                    searchedProducts.map(pd => <Product
                        handleAddtoCart={props.handleAddtoCart}
                        key={pd.name}
                        product={pd}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Shop;