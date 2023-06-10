type cordinatesType = {
	lat: string;
	long: string;
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
