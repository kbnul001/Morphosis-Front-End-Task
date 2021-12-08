import { useEffect, useState } from "react";

const useProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8000/api/robots')
            .then(res => res.json())
            .then(data => {
                setProducts(data.data);
            })
    }, [])

    return {
        products,
        setProducts
    }
}

export default useProducts;