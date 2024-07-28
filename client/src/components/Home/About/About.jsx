import React from "react";

const About = () => {
    return (
        <div className="h-[100vh] flex justify-center items-center">
            <div className="bg-primary text-white p-3 w-3/5 rounded-md shadow-xl">
                <h1 className="text-2xl font-bold text-center">About swapdeal </h1>
                <h3 className="text-xl">
                    <div>
                        Swapdeal is your one-stop destination for buying, selling, and swapping your unwanted items. We believe in the power of sharing and reducing waste, and our platform is designed to make it easy for you to find new homes for your pre-loved possessions.
                    </div>
                    <br />

                    <div>
                        Whether you're looking to declutter your space, earn extra cash, or discover unique treasures, Swapdeal has something for everyone. Our user-friendly interface and secure platform ensure a hassle-free experience for both buyers and sellers.
                    </div><br />

                    <div>
                        <b> Our Mission</b>: To create a sustainable community where people can connect, trade, and reduce their environmental impact.
                        <br />
                       <b> Our Vision</b>: To become the leading online marketplace for buying, selling, and swapping goods.
                    </div>
                </h3>

            </div>
        </div>
    )
}

export default About;