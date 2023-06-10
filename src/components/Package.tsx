import React from "react";
import Lottie from "lottie-react";
import Truck from "../assets/Truck.json";
import { BiBox } from "react-icons/bi";
import { VscLocation } from "react-icons/vsc";
import { FaTrash } from "react-icons/fa";
import { MdError } from "react-icons/md";
import { packageType } from "../@types/package";
import { format } from "date-fns";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

type Props = {
	packageData: packageType | null;
	isLoading: boolean;
	handleReset: () => void;
	error: string | null;
};

function Package({ packageData, isLoading, handleReset, error }: Props) {
	return (
		<div className="flex flex-col  items-center  mx-auto my-2   mt-5">
			{!isLoading && !packageData && (
				<Lottie
					animationData={Truck}
					loop={true}
					className=" h-[300px]  w-[300px] sm:h-[420px] sm:w-[420px] md:h-[500px] md:w-[700px] "
				/>
			)}

			{/* package data container */}
			{packageData && (
				<div className="bg-white  w-[350px] h-auto md:w-[500px]  md:h-auto  rounded-xl  flex flex-col shadow-lg">
					{/* shippment heading details */}
					<div className="flex ml-3 py-2">
						<div className="  h-[40px] w-[40px] md:h-[55px]  md:w-[55px] mr-2 bg-blue-500  rounded-full flex  items-center justify-center">
							<BiBox className="text-white text-lg md:text-3xl font-bold" />
						</div>
						<div className="">
							{packageData && (
								<p className=" text-sm md:text-base pm-2  text-blue-500">
									{packageData?.packageName}
								</p>
							)}
							<p className="items-center">
								{packageData && (
									<span className=" text-base md:text-lg font-sans">
										{packageData?.shippingCost}
									</span>
								)}
								<span className="pl-1 text-xs md:text-sm  ">
									Weight:{packageData?.weight ?? 0} g/kg
								</span>{" "}
								|
								<span className="pl-1 text-xs md:text-sm  ">
									Qty:{packageData?.quantity ?? 0}
								</span>
							</p>
							{packageData && (
								<p className="text-sm md:text-base text-gray-400">
									{packageData?.description}
								</p>
							)}
						</div>
					</div>
					<div className="bg-blue-500 h-[1px] w-[100%]  flex" />
					<div className="flex">
						{/* stepper */}
						<div className="mx-4  my-2  items-center ">
							<div className="bg-blue-500  items-center  p-2  rounded-full">
								<VscLocation className="text-gray-200   text-2xl" />
							</div>
							<div className="w-[1px] h-[100px] bg-blue-500 ml-5"></div>
							<div className="bg-blue-500   items-center  p-2  rounded-full">
								<VscLocation className="text-white   text-2xl" />
							</div>
						</div>

						{/* destination and origin container */}
						<div className="ml-5  my-2">
							{/* origin */}
							<div>
								<p className="text-l  font-sans  text-gray-300">
									Pick-UP Point{" "}
									{packageData && (
										<span className="text-xs  text-blue-500">
											{format(
												new Date(packageData?.shippedDate ?? ""),
												"d,LL,yyyy"
											)}
										</span>
									)}
								</p>
								{packageData && (
									<p className="text-sm">
										{packageData?.origin?.senderAddress}
									</p>
								)}
								<p className="text-sm">{packageData?.origin?.senderName}</p>
								<p className="text-xs  ">{packageData?.origin?.senderEmail}</p>
							</div>
							{/* destination */}
							<div className="my-5">
								<p className="text-l  font-sans  text-gray-400">
									Drop-Off Point{" "}
									{packageData && (
										<span className="text-xs  text-blue-500">
											ETA{" "}
											{format(
												new Date(packageData?.deliveryDate ?? ""),
												"d,LL,yyyy"
											)}
										</span>
									)}
								</p>
								<p className="text-sm">
									{packageData?.destination?.receiverAddress}
								</p>
								<p className="text-sm">
									{packageData?.destination?.receiverName}
								</p>
								<p className="text-xs  ">
									{packageData?.destination?.receiverEmail}
								</p>
							</div>
						</div>
					</div>

					<button
						onClick={handleReset}
						type="button"
						className="bg-blue-500 text-white rounded-md py-1 px-10 my-5 cursor-pointer mx-auto flex items-center"
					>
						Clear
						<FaTrash className="text-light ml-1" />
					</button>
				</div>
			)}

			{/* loading skeleton */}
			{isLoading && (
				<div className="bg-white  w-[350px] h-auto md:w-[500px]  md:h-auto  rounded-xl  flex flex-col shadow-lg">
					{/* shippment heading details */}
					<div className="flex ml-3 py-2 items-center">
						<div className="w-[55px]  h-[55px] m-2">
							<Skeleton circle className="h-[45px]  w-[45px]" />
						</div>
						<div className="w-[300px] ">
							<Skeleton count={1} className="h-[15px]  w-[40px]" />
							<div className="w-[150px]">
								<Skeleton count={1} className="h-[15px]  " />
							</div>
						</div>
					</div>
					<div className="bg-blue-500 h-[1px] w-[100%]  flex" />
					<div className="flex">
						{/* stepper */}
						<div className="mx-4  my-2  items-center ">
							<div className="bg-blue-500  items-center  p-2  rounded-full">
								<VscLocation className="text-white  text-2xl" />
							</div>
							<div className="w-[1px] h-[100px] bg-blue-500 ml-5"></div>
							<div className="bg-blue-500   items-center  p-2  rounded-full">
								<VscLocation className="text-white   text-2xl" />
							</div>
						</div>

						{/* destination and origin container */}
						<div className="ml-5  my-2">
							{/* origin */}
							<div>
								<p className="text-l  font-sans  text-gray-300">
									Pick-UP Point{" "}
									{packageData && (
										<span className="text-xs  text-blue-500">
											{format(
												new Date(packageData?.shippedDate ?? ""),
												"d,LL,yyyy"
											)}
										</span>
									)}
								</p>
								<div className="w-[200px]">
									<Skeleton count={2} className="h-[15px]  w-[40px]" />
									<div className="w-[100px]">
										<Skeleton count={1} className="h-[15px]  w-[40px]" />
									</div>
									<div className="w-[60px]">
										<Skeleton count={1} className="h-[15px]  w-[40px]" />
									</div>
								</div>
							</div>
							{/* destination */}
							<div className="my-5">
								<p className="text-l  font-sans  text-gray-300">
									Drop-Off Point{" "}
									{packageData && (
										<span className="text-xs  text-blue-500">
											ETA{" "}
											{format(
												new Date(packageData?.deliveryDate ?? ""),
												"d,LL,yyyy"
											)}
										</span>
									)}
								</p>
								<div className="w-[200px]">
									<Skeleton count={2} className="h-[15px]  w-[40px]" />
									<div className="w-[100px]">
										<Skeleton count={1} className="h-[15px]  w-[40px]" />
									</div>
									<div className="w-[60px]">
										<Skeleton count={1} className="h-[15px]  w-[40px]" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}

			{/* error section */}
			{error && (
				<div className="h-[180px] w-[300px] md:w-[550px]  bg-light  rounded-xl  flex  flex-col items-center justify-center  shadow-lg">
					<MdError className="text-blue-500 text-4xl  md:text-6xl  mx-auto  " />

					<h4 className="text-center  text-blue-500  text-xl md:text-2xl">
						{"Something went wrong"}
					</h4>

					<button
						onClick={handleReset}
						className="text-white  bg-blue-500 px-5 py-1 rounded-md  my-2  cursor-pointer"
						type="button"
					>
						Try again
					</button>
				</div>
			)}
		</div>
	);
}

export default Package;
