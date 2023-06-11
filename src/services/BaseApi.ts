// const BaseApi: string =
// 	process.env.NODE_ENV === "development"
// 		? "http://localhost:5000/api"

import axios from "axios";
import { cordinatesType } from "../@types/package";

// 		: "https://acs-logistics-api.onrender.com/api";
const BaseApi: string = "https://acs-logistics-api.onrender.com/api";
// const BaseApi = process.env.NODE_ENV ==='development'? 'http://localhost:5000/api':'https://acs-logistics-api.cyclic.app/api';
// const BaseApi = process.env.NODE_ENV ==='development'? 'http://localhost:5000/api':'https://acs-backend-api.herokuapp.com/api';

// console.log("API-Platform",BaseApi);

export const getCurrentLocation = async ({ lat, long }: cordinatesType) => {
	if (lat === undefined && long === undefined) return;
	if (lat === "" && long === "") return;

	const latitude = parseFloat(lat);
	const longitude = parseFloat(long);

	if (typeof latitude !== "number" && typeof longitude !== "number") return;

	let Location;

	try {
		const response = await axios.get(
			`https://geocode.maps.co/reverse?lat=${latitude}&lon=${longitude}`
		);
		Location = await response?.data;
		// console.log(JSON.stringify(response, null, 2));ß
	} catch (error) {
		console.log(error);
	}

	return Location;
};

export default BaseApi;
