import { identifierIds, setMap, setOrderId } from "./setData.js";
import { mockResponse } from "./mockResponse.js";

var settings = {
	url: "https://alpha.preprod.fxtrt.io/app/order/v1/api/external/ordertracking/orders:f683486f-6b96-5e73-a1d5-b45d10dee7fb",
	method: "GET",
	timeout: 0,
	headers: {
		"x-coreos-request-id": "unAuth1",
		"x-coreos-tid": "alpha",
	},
};

$.ajax(settings)
	.done(function (response) {
		setMap(
			mockResponse?.data?.riderTracking[
				response?.data?.riderTracking?.length - 1
			]
		);
		setOrderId({
			orderID: mockResponse?.data?.order?.clientOrderId,
			orderState: mockResponse?.data?.order?.state,
		});
	})
	.catch((error) => {});
