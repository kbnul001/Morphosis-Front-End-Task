import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [searchedProducts, setSearchedProducts] = useState([]);

    const handleSearch = (e) => {
        const searchKey = e.target.value;
        const newProducts = products.filter(pd => pd.material.toLowerCase().includes(searchKey.toLowerCase()));
        setSearchedProducts(newProducts);
    }

    useEffect(() => {
        fetch('http://localhost:8000/api/robots')
            .then(res => res.json())
            .then(data => {
                setProducts(data.data);
                setSearchedProducts(data.data);
            })
    }, [])
    return (
        <div className="">
            {/* search bar */}
            <div className="relative border-2 mb-16">
                <div className="absolute top-4 left-3"> <i className="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i> </div> <input onChange={handleSearch} type="text" className="h-14 w-96 pl-10 pr-20 rounded-lg z-0 focus:shadow focus:outline-none" placeholder="Search by material..." />
                {/* <div className="absolute top-2 right-2"> <button className="h-10 w-20 text-white rounded-lg bg-purple-500 hover:bg-purple-600">Search</button> </div> */}
            </div>
            {/* products display */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {
                    searchedProducts.map(pd => <Product
                        key={pd.name}
                        product={pd}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Shop;