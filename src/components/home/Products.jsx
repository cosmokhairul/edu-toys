import { useEffect, useState } from "react";
import SingleProduct from "../SingleProduct";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("https://edu-toys-server-three.vercel.app/shoes")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);
    return (
        <div className="my-16">
            <h1 className="text-5xl font-bold text-center text-[#25283D] mb-16">Our Toys</h1>
            <div className="flex flex-wrap gap-4 justify-center items-center ">
                {products.slice(0, 4).map((shoe) => (
                    <SingleProduct
                        key={shoe._id}
                        shoe={shoe}
                    />
                ))}
            </div>
            <div className="text-center pt-16">
                <button className="btn bg-[#25283D] text-lg text-white hover:bg-[#8F3985]"> <Link to="/shop">Shop More Toys</Link></button>
            </div>
        </div>
    );
};

export default Products;
// import SingleProduct from "../SingleProduct";

// // eslint-disable-next-line react/prop-types
// const Products = ({ data }) => {
//     return (
//         <div>
//             <h1 className="my-8 text-4xl font-bold text-center ">Our Products </h1>
//             <div className="flex flex-wrap gap-4 px-6 justify-center items-center mb-10">
//                 {
//                     // eslint-disable-next-line react/prop-types
//                     data.slice(0, 4).map((shoe) => (
//                         <SingleProduct key={shoe.id} shoe={shoe} />
//                     ))
//                 }
//             </div>
//         </div>
//     );
// };

// export default Products;