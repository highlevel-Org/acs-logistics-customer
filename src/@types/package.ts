export type cordinatesType = {
	lat: string;
	long: string;
};

export type geoLocationType = {
	place_id: number;
	licence: string;
	powered_by: string;
	osm_type: string;
	osm_id: number;
	lat: string;
	lon: string;
	display_name: string;
	address: AddressType;
	boundingbox: string[];
};

export type AddressType = {
	county: string;
	state: string;
	country: string;
	country_code: string;
};

export type packageType = {
	origin: {
		originCordinates: cordinatesType;
		senderName: string;
		senderEmail: string;
		senderAddress: string;
	};
	currentLocation: {
		currentCordinates: cordinatesType;
		currentLocationAddress: string;
		reason: string;
	};
	destination: {
		receiverCordinates: cordinatesType;
		receiverName: string;
		receiverEmail: string;
		receiverPhone: string;
		receiverAddress: string;
	};
	_id: string;
	packageName: string;
	quantity: number;
	description: string;
	weight: number;
	completed: boolean;
	imageUrl: string;
	serviceType: "shipping";
	serialNumber: string;
	deliveryDate: string;
	shippingCost: string;
	user: string;
	shippedDate: string;
	createdAt: string;
	updatedAt: string;
	__v: number;
};
