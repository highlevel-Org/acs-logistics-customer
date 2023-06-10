import React from "react";
import { BsBoxSeamFill } from "react-icons/bs";

export default function Nav() {
	return (
		<nav className=" flex  justify-between  align-center my-3 md:my-4    px-10">
			<a
				href="http://"
				rel="noopener noreferrer"
				className="text-xl  md:text-2xl font-bold text-white  cursor-pointer font-sans hover:text-secondary"
			>
				ACL Logistics{" "}
			</a>

			<div className="flex  justify-between items-center">
				<h5 className=" text-base md:text-xl  text-white">Tracking Portal</h5>

				<BsBoxSeamFill className="text-base md:text-xl text-white ml-1 md:ml-2" />
			</div>
		</nav>
	);
}
