import React, { useState } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Search from "./components/search";
import Footer from "./components/Footer";
import Package from "./components/Package";
import axios from "axios";
import BaseApi from "./services/BaseApi";
import { packageType } from "./@types/package";
import { error } from "console";

function App() {
	const [Loading, setLoading] = useState(false);
	const [Error, setError] = useState<string | null>(null);
	const [Id, setId] = useState("");
	const [packageData, setPackage] = useState<packageType | null>(null);

	const getShippment = async () => {
		if (Id === "") return;
		setLoading(true);
		try {
			const response = await axios.get(
				`${BaseApi}/shippment/customerShippment/${Id}`
			);
			const data = response?.data?.shippment;

			setPackage(data);
			setId("");
		} catch (error) {
			console.log("error from api calls", error);

			//@ts-ignore
			const newError = error && error?.message;
			setError(newError);
		} finally {
			setLoading(false);
		}
	};

	const handleReset = () => {
		setId("");
		setPackage(null);
		setLoading(false);
	};
	return (
		<div className="max-w-[1024px]     mx-auto">
			<Nav />
			<Hero />
			<Search
				Id={Id}
				setId={setId}
				getShippment={getShippment}
				isLoading={Loading}
			/>
			<Package
				packageData={packageData}
				isLoading={Loading}
				handleReset={handleReset}
				error={Error}
			/>
			<Footer />
		</div>
	);
}

export default App;
