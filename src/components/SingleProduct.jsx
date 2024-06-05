/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const SingleProduct = ({ shoe }) => {
    const { _id, title, brand, price, description, image_url } = shoe;
    return (
        <div className="card w-96 max-h-[500px]  bg-[#EFD9CE] bg-base-100 shadow-xl border border-[#98DFEA]">
            <figure><img src={image_url} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="font-bold text-xl text-center">{title}</h2>
                <h3 className="text-lg font-semibold text-center">Brand: {brand}</h3>
                <h3 className="text-lg font-semibold text-center">Price: ${price}</h3>
                <p className="text-base text-center ">{description}</p>
                <div className="card-actions justify-center ">
                    <button className="btn bg-[#25283D] text-lg text-white hover:bg-[#8F3985]">
                        <Link to={`/products/${_id}`}>See Details</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;