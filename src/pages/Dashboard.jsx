import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { Link } from "react-router-dom";

const Dashboard = () => {

    const { user } = useAuth();
    const [userInfo, setUserInfo] = useState();
    console.log(userInfo);

    useEffect(() => {
        fetch(`https://edu-toys-server-three.vercel.app/user/${user?.email}`)
            .then((res) => res.json())
            .then((data) => setUserInfo(data));
    }, [user]);



    return (
        <div>
            <div className="flex justify-between mb-7">
                <h1 className="text-4xl mx-auto font-bold ">Profile Information</h1>
                <Link
                    to={`/dashboard/profile/edit/${userInfo?._id}`}
                    className="btn btn-neutral btn-md"
                >
                    Edit Profile
                </Link>
            </div>

            <div className="w-1/4 py-5">
                <img src={user?.photoURL || "/public/profilepic.png"} alt="" />
            </div>

            <div className="mt-5">
                <h1 className="text-2xl pb-1">Name: {userInfo?.name}</h1>
                <h1 className="text-2xl pb-1">Email: {userInfo?.email}</h1>
                <h1 className="text-2xl pb-1">Age: {userInfo?.age} years</h1>
            </div>
        </div>
    );
};

export default Dashboard;