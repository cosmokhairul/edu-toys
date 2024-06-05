import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
    const shoe = useLoaderData();
    const { brand, description, image_url, price, title } = shoe;
    return (
        <div className="bg-[#98DFEA] py-16">

            <h1 className="text-5xl text-center font-bold  text-[#25283D] pb-16">Product Details</h1>

            <div className="">
                <img className="h-[400px] mx-auto" src={image_url} alt="product image" />
                <h1 className="text-4xl text-center font-bold mt-5 pb-3">Name:  {title}</h1>

                <h3 className="text-2xl font-semibold text-center pb-2">Brand: {brand}</h3>
                <h3 className="text-2xl font-semibold text-center pb-2">Price: {price} $$</h3>
                <p className="text-lg font-normal text-center ">Description: {description}</p>
            </div>
        </div>
    );
};

export default ProductDetails;