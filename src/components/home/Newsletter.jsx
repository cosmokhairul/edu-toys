
const Newsletter = () => {
    return (
        <div>
            <h1 className="text-4xl font-bold text-center text-[#25283D] my-16">Subscribe Now for Newsletter</h1>
            <div className="mx-auto text-center mb-16">
                <div className="join">
                    <input className="input input-bordered border-red-600 join-item" placeholder="Email" />
                    <button className="btn join-item rounded-r-full border-red-600">Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;