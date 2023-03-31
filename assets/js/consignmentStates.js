export const deliveryStates = {
	"E-010-R-0041": "Delivered To Consignee",
	"E-010-R-0042": "Delivered To Security",
	"E-010-R-0043": "Delivered to Other As Per Consignee",
	"E-021-R-0013": "Delivery Rescheduled",
	"E-021-R-0020": "Payment Mode/Amount Dispute",
	"E-021-R-0022": "Customer Asked For Open Delivery",
	"E-021-R-0023": "Consignee Opened Package And Refused To Accept",
	"E-021-R-0035": "Delivery failed",
	"E-021-R-0036": "Delivery failed",
};

export const deliverySuccessStates = [
	deliveryStates["E-010-R-0041"],
	deliveryStates["E-010-R-0042"],
	deliveryStates["E-010-R-0043"],
];

export const deliveryActiveStates = [deliveryStates["E-021-R-0013"]];

export const deliveryFailedStates = [
	deliveryStates["E-021-R-0020"],
	deliveryStates["E-021-R-0022"],
	deliveryStates["E-021-R-0023"],
	deliveryStates["E-021-R-0035"],
	deliveryStates["E-021-R-0036"],
];

export const outForDeliveryStates = {
	"E-021-R-0024": "Entry Restricted Area",
	"E-021-R-0025": "Address Quality Issue",
	"E-021-R-0026": "Not Attempted",
};
