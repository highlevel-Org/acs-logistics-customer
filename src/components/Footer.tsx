import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

function Footer() {
	return (
		<div className=" max-w-[1024px]  container flex flex-col-reverse items-center   sm:justify-between sm:flex-row  mx-auto   py-5 px-5 fixed bottom-0 left-0  right-0  ">
			<div className="flex flex-col  space-y-12">
				<h3 className="text-xl text-white  md:text-2xl  font-cursive ">
					&copy; {new Date().getFullYear()} ACS Logistics
				</h3>
			</div>
			<div className="flex  space-x-2  items-center ">
				<h4 className="text-xl md:text-2xl  text-white  font-cursive  md:mr-2">
					Contact Us
				</h4>
				<div className="text-white text-xl flex md:text-2xl  space-x-5">
					<a
						href="mailto:support@acl-logistics.net"
						target="_blank"
						rel="noopener noreferrer"
					>
						<GrMail />
					</a>
					<a href="http://" target="_blank" rel="noopener noreferrer">
						<FaFacebookSquare />
					</a>
					<a href="http://" target="_blank" rel="noopener noreferrer">
						<FaTwitter />
					</a>
				</div>
			</div>
		</div>
	);
}

export default Footer;
