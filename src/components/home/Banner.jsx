import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="hero h-[600px] bannerBg" >
            <div className="hero-overlay bg-[#8F3985] bg-opacity-90"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="mx-auto">
                    <h1 className="mb-5 text-5xl font-bold text-white">Welcome to EduToys</h1>
                    <h1 className="mb-5 text-3xl font-bold text-[#98DFEA]">Inspiring Young Minds</h1>
                    <p className="text-xl mb-5 text-[#EFD9CE]">EduToys offers a curated selection of educational toys designed to inspire young minds. Discover fun and innovative toys that foster creativity, learning, and development for kids of all ages</p>

                    <button className="btn bg-transparent text-lg text-white hover:bg-[#25283D]"> <Link to="/about">Learn About Us</Link></button>

                </div>
            </div>
        </div>
    );
};

export default Banner;