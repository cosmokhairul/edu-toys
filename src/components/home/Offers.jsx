
const Offers = () => {
    return (
        <div>
            <h1 className="text-5xl font-bold text-center text-[#25283D] my-16">Special Offers Ending In</h1>
            <div className="mx-auto pb-16">
                <div className="grid grid-flow-col gap-5 text-center auto-cols-max place-content-center">
                    <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                        <span className="countdown font-mono text-5xl">
                            <span style={{ "--value": 15 }}></span>
                        </span>
                        days
                    </div>
                    <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                        <span className="countdown font-mono text-5xl">
                            <span style={{ "--value": 10 }}></span>
                        </span>
                        hours
                    </div>
                    <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                        <span className="countdown font-mono text-5xl">
                            <span style={{ "--value": 24 }}></span>
                        </span>
                        min
                    </div>
                    <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                        <span className="countdown font-mono text-5xl">
                            <span style={{ "--value": 48 }}></span>
                        </span>
                        sec
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offers;