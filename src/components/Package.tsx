import React, { useEffect, useMemo, useState } from "react";
import Lottie from "lottie-react";
import Truck from "../assets/Truck.json";
import { BiBox } from "react-icons/bi";
import { VscLocation } from "react-icons/vsc";
import { FaTrash } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import { MdLocationSearching } from "react-icons/md";
import { MdError } from "react-icons/md";
import { geoLocationType, packageType } from "../@types/package";
import { format } from "date-fns";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { getCurrentLocation } from "../services/BaseApi";

type Props = {
	packageData: packageType | null;
	isLoading: boolean;
	handleReset: () => void;
	error: string | null;
};

function Package({ packageData, isLoading, handleReset, error }: Props) {
	// console.log("Package======\n", JSON.stringify(packageData, null, 2));

	const [currentLocation, setcurrentLocation] =
		useState<geoLocationType | null>(null);

	// useEffect(() => {
	// 	if (!packageData) return;

	// 	const getLocation = async () => {
	// 		const location = await getCurrentLocation(
	// 			packageData?.currentLocation?.currentCordinates
	// 		);

	// 		setcurrentLocation(location);

	// 		// console.log("resss:\n", JSON.stringify(res, null, 2));
	// 	};

	// 	getLocation();

	// 	return () => {};∂
	// }, [packageData]);

	return (
		<div className="flex flex-col  items-center  mx-auto    mt-5  mb-[100px]">
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
						<div className="  h-[40px] w-[40px] md:h-[55px]  md:w-[55px] mr-2 bg-primary  rounded-full flex  items-center justify-center">
							<BiBox className="text-white  md:text-2xl " />
						</div>
						<div className="ml-4">
							{packageData && (
								<p className=" text-sm md:text-base  text-primary">
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
								<p className="text-sm md:text-base text-gray-400 ">
									{packageData?.description}
								</p>
							)}
						</div>
					</div>
					<div className="bg-primary h-[1px] w-[100%]  flex" />
					<div className="flex">
						{/* stepper */}
						<div className="mx-4  my-2  items-center ">
							<div className="bg-primary text-white items-center  p-2  rounded-full">
								<MdLocationSearching className="text-white   text-2xl" />
							</div>
							<div className="relative w-[1px] h-[180px] bg-primary ml-5 flex items-center">
								<div className="absolute right-[2px]  -rotate-90">
									<ImLocation className="text-primary   text-2xl" />
								</div>
							</div>
							<div className="bg-primary   items-center  p-2  rounded-full">
								<MdLocationSearching className="text-white   text-2xl" />
							</div>
						</div>

						{/* destination and origin container */}
						<div className="ml-5  my-2">
							{/* origin */}
							<div>
								<p className="text-l  font-sans  text-gray-400">
									Pick-UP Point{" "}
									{packageData && (
										<span className="text-xs  text-primary">
											{format(
												new Date(packageData?.shippedDate ?? ""),
												"d,LLL,yyyy"
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
							{/* current location */}
							<div className="my-3">
								<p className="text-l  font-sans  text-gray-400">
									Current Location{" "}
									{packageData && (
										<span className="text-xs  text-primary">
											{format(new Date(), "d,LLL,yyyy")}
										</span>
									)}
								</p>

								{packageData?.currentLocation?.currentLocationAddress && (
									<p className="text-sm">
										{packageData?.currentLocation?.currentLocationAddress}
									</p>
								)}

								{/* {currentLocation && (
									<p className="text-sm">{currentLocation?.display_name}</p>
								)} */}
								<p className="text-sm">Reason :</p>
								<p className="text-xs  ">
									{packageData?.currentLocation?.reason}
								</p>
							</div>
							{/* destination */}
							<div className="my-5">
								<p className="text-l  font-sans  text-gray-400">
									Drop-Off Point{" "}
									{packageData && (
										<span className="text-xs  text-primary">
											ETA{" "}
											{format(
												new Date(packageData?.deliveryDate ?? ""),
												"d,LLL,yyyy"
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
						className="bg-primary text-white rounded-md py-1 px-10 my-5 cursor-pointer mx-auto flex items-center"
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
					<div className="bg-primary h-[1px] w-[100%]  flex" />
					<div className="flex">
						{/* stepper */}
						<div className="mx-4  my-2  items-center ">
							<div className="bg-primary  items-center  p-2  rounded-full">
								<MdLocationSearching className="text-white   text-2xl" />
							</div>
							<div className="w-[1px] h-[100px] bg-primary ml-5"></div>
							<div className="bg-primary   items-center  p-2  rounded-full">
								<MdLocationSearching className="text-white   text-2xl" />
							</div>
						</div>

						{/* destination and origin container */}
						<div className="ml-5  my-2">
							{/* origin */}
							<div>
								<p className="text-l  font-sans  text-gray-300">
									Pick-UP Point{" "}
									{packageData && (
										<span className="text-xs  text-primary">
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
										<span className="text-xs  text-primary">
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
					<MdError className="text-primary text-4xl  md:text-6xl  mx-auto  " />

					<h4 className="text-center  text-primary  text-xl md:text-2xl">
						{"Something went wrong"}
					</h4>

					<button
						onClick={handleReset}
						className="text-white  bg-primary px-5 py-1 rounded-md  my-2  cursor-pointer"
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
