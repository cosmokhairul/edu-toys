/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const SingleProductCardDashboard = ({ shoe, onDelete }) => {
    const token = localStorage.getItem('token');
    const { _id, title, brand, price, description, image_url } = shoe;

    const handleDelete = async () => {
        const result = await Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'Cancel'
        });

        if (result.isConfirmed) {
            await fetch(`https://edu-toys-server-three.vercel.app/shoes/${_id}`, {
                method: "DELETE",
                headers: {
                    "Content-type": "application/json",
                    authorization: `Bearer ${token}`,
                },
            })
                .then((res) => res.json())
                .then(() => {
                    onDelete(_id);
                });

            Swal.fire(
                'Deleted!',
                'Your product has been deleted.',
                'success'
            );
        }
    };



    return (
        <div className="card w-96 max-h-[500px]  bg-[#EFD9CE] bg-base-100 shadow-xl border border-[#98DFEA]">
            <figure><img src={image_url} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="font-bold text-xl text-center">{title}</h2>
                <h3 className="text-lg font-semibold text-center">Brand: {brand}</h3>
                <h3 className="text-lg font-semibold text-center">Price: ${price}</h3>
                <p className="text-base text-center ">{description}</p>
                <div className="card-actions justify-center ">
                    <button className="btn bg-indigo-500 text-white text-base">
                        <Link to={`/products/${_id}`}>See Details</Link>
                    </button>
                    <button className="btn bg-green-600 text-white text-base">
                        <Link to={`edit/${_id}`}>Edit</Link>
                    </button>
                    <button onClick={handleDelete} className="btn bg-red-500 text-white text-base">
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SingleProductCardDashboard;