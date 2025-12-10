function Testimonials() {
    return (
        <section id="testimonials" className="px-4 py-12 max-h-[80vh] bg-surface-dark/90">
            <div className="max-w-screen-2xl mx-auto text-text-light text-center">
                {/* Title */}
                <h2 className="text-6xl font-extrabold py-2">Brands That Trust Our Vision</h2>
                <h5 className="text-lg font-bold py-10">
                    We've helped these amazing brands elevate their visual identity
                </h5>
                {/*cards*/}
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-20 text-text-main">
                    <div className="bg-background h-96 rounded-xl p-4 "></div>
                    <div className="bg-background h-96 rounded-xl p-4"></div>
                    <div className="bg-background h-96 rounded-xl p-4"></div>
                </div>
            </div>
        </section>
    );
}

export default Testimonials;
