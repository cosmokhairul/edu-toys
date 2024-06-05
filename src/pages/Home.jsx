import { useLoaderData } from "react-router-dom";
import Accordian from "../components/home/Accordian";
import Banner from "../components/home/Banner";
import Products from "../components/home/Products";
import Offers from "../components/home/Offers";
import Newsletter from "../components/home/Newsletter";

const Home = () => {
    const data = useLoaderData();
    return (
        <div>
            <Banner />
            <Products data={data} />
            <Offers />
            <Accordian />
            <Newsletter />
        </div>
    );
};

export default Home;