import React from "react";
import { BsBoxSeamFill } from "react-icons/bs";

export default function Nav() {
	return (
		<nav className=" flex  justify-between bg-primary align-center  py-4  px-10  fixed top-0 left-0  right-0">
			<a
				href="http://"
				rel="noopener noreferrer"
				className="text-xl  md:text-2xl font-bold text-white  cursor-pointer font- hover:text-secondary"
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
