import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";

const MainLayout = () => {
    return (
        <div>
            <NavBar />
            <Outlet />
            <Footer />

        </div>
    );
};

export default MainLayout;