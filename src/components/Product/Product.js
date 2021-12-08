import React from 'react';

const Product = (props) => {
    const { name, image, price, stock, createdAt, material } = props.product;
    const { handleAddtoCart } = props;
    let createdDate = new Date(createdAt);
    return (
        <div className=" p-4 rounded-lg shadow-md hover:shadow-xl">
            {/* Image section  */}
            <div className="">
                <img className="rounded-xl mx-auto" src={image} alt="" />
            </div>
            {/* Body section  */}
            <div className="mt-4 space-y-2 text-center">
                <h3 className="text-xl font-semibold text-center my-3 text-purple-600">{name}</h3>

                <p className="">Created with:  <span>{material}</span> </p>
                {stock ? <p className="mr-4 ">In Stock: {stock}</p>
                    :
                    <p className="mr-4 text-red-400">Out of Stock</p>}

                <h3 className="text-xl ml-auto text-yellow-400 font-bold">&#3647; {price}</h3>
                <p className="text-sm font-light"><i className="far fa-clock text-purple-600"></i> Created At: {createdDate.toLocaleDateString()}</p>

                {/* button  */}
                <div className="text-center ">
                    <button
                        onClick={() => handleAddtoCart(props.product)}
                        disabled={!stock}
                        className={
                            !stock ? "bg-gray-400 w-44 h-8 mt-4  text-white rounded-md focus:ring-2 focus:bg-purple-600 " : "w-44 h-8 mt-4 bg-purple-600 text-white rounded-md focus:ring-2 focus:bg-purple-600 hover:bg-purple-400"
                        }> Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Product;