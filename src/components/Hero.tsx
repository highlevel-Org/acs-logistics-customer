import React from "react";
import Typed from "react-typed";
// import "react-typed/dist/animatedCursor.css";

function Hero() {
	return (
		<div className="my-5">
			<h3 className="text-white text-sm md:text-xl  text-center my-1 md:my-4 mb-2 md:mb-5  font-indie">
				Fast & Easy Shipping #WhenEverWhereEver
			</h3>

			<div className="flex  justify-center">
				<p className="text-center  text-white  text-base md:text-2xl  my-2 mr-2">
					ACL LOGISTICS |
				</p>
				<Typed
					className="text-center  text-white text-base md:text-2xl  my-2  uppercase"
					strings={["Freight", "Cargo", "Express Shipping"]}
					typeSpeed={120}
					backSpeed={140}
					loop
				/>
			</div>
			<h1 className="text-white  uppercase  text-center  text-xl md:text-4xl">
				Quickly Track your package
			</h1>
		</div>
	);
}

export default Hero;
