function ServicesCTA() {
    return (
        <section id="cta" className="py-20 bg-surface-dark text-text-light">
            <div className="max-w-4xl mx-auto text-center px-4">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    NEED VISUALS FOR YOUR BRAND?
                </h2>
                <p className="text-xl mb-10">Get a free quote today.</p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <button className="bg-success hover:bg-green-600 text-white font-bold py-3 px-8 rounded transition duration-300">
                        WhatsApp Us
                    </button>
                    <button className="bg-transparent border-2 border-text-light hover:bg-background hover:text-primary font-bold py-3 px-8 rounded transition duration-300">
                        See Portfolio
                    </button>
                </div>
            </div>
        </section>
    );
}

export default ServicesCTA;
