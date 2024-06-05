import { useEffect, useState } from "react";
import SingleProduct from "../components/SingleProduct";

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/shoes")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);
    return (
        <div className="my-16">
            <h1 className="text-5xl font-bold text-center text-[#25283D] mb-16">Shop Our Toys</h1>
            <div className="flex flex-wrap gap-4 justify-center items-center ">
                {products.map((shoe) => (
                    <SingleProduct
                        key={shoe._id}
                        shoe={shoe}
                    />
                ))}
            </div>
        </div>
    );
};

export default Shop;