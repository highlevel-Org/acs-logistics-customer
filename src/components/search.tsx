import React from "react";
import { FaSearch } from "react-icons/fa";

type Props = {
	Id: string;
	isLoading: boolean;
	setId: React.Dispatch<React.SetStateAction<string>>;
	getShippment: () => void;
};

function search({ Id, setId, getShippment, isLoading }: Props) {
	return (
		<div className="flex mt-12  h-[35px] w-[250px] md:h-[55px]  md:w-[480px]  bg-white items-center  mx-auto rounded-full  pl-4 pr-1 md:pr-2">
			<input
				value={Id}
				onChange={(e) => setId(e.target.value)}
				className="bg-transparent  text-sm md:text-xl text-blue-500  focus:outline-none flex-1 pr-2 "
				type="text"
				name=""
				placeholder="Enter your tracking id here..."
				id=""
				maxLength={24}
			/>
			<button
				disabled={isLoading || Id === ""}
				onClick={getShippment}
				className={`h-[25px]  w-[25px] md:h-[45px] flex md:w-[45px] bg-blue-500 items-center justify-center   rounded-full shadow-2xl   place-content-center  ${
					isLoading ? "cursor-progress" : "cursor-pointer"
				}    ${Id === "" ? "cursor-not-allowed" : "cursor-pointer"}`}
			>
				<FaSearch className=" text-sm md:text-xl  text-white" />
			</button>
		</div>
	);
}

export default search;
