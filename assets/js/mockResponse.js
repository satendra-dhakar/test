export const mockResponse = {
	data: {
		order: {
			clientOrderId: "TestOrder1001",
			state: "closed:delivered",
		},
		riderTracking: [
			{
				tis: 1679570467306,
				lat: 28.6139,
				lon: 77.209,
			},
			{
				tis: 1679570770089,
				lat: 28.6139,
				lon: 77.209,
			},
			{
				tis: 1679571095093,
				lat: 28.6139,
				lon: 77.209,
			},
			{
				tis: 1679571397541,
				lat: 28.6139,
				lon: 77.209,
			},
			{
				tis: 1679571702169,
				lat: 28.6139,
				lon: 77.209,
			},
			{
				tis: 1679572023091,
				lat: 28.6139,
				lon: 77.209,
			},
			{
				tis: 1679572324043,
				lat: 28.6139,
				lon: 77.209,
			},
			{
				tis: 1679572625027,
				lat: 28.6139,
				lon: 77.209,
			},
			{
				tis: 1679572927378,
				lat: 28.6139,
				lon: 77.209,
			},
			{
				tis: 1679572927412,
				lat: 28.6139,
				lon: 77.209,
			},
		],
		job: {
			pickup: {
				geolocation: {
					lat: "28.44947",
					long: "77.075169",
				},
			},
			drop: {
				geolocation: {
					lat: "28.625774",
					long: "77.385614",
				},
			},
			dispatchRef: "Team D-220323-130402",
		},
		shipmentTracking: [
			{
				events: [
					{
						eventCode: "",
						timestamp: 0,
					},
					{
						eventCode: "E-020",
						reasonCode: "R-0046",
						timestamp: 1679470318,
					},
					{
						eventCode: "E-012",
						reasonCode: "R-0095",
						timestamp: 1679470457,
					},
					{
						eventCode: "E-021",
						reasonCode: "R-0063",
						timestamp: 1679570841,
					},
					{
						eventCode: "E-010",
						reasonCode: "R-0041",
						timestamp: 1679571262,
					},
					{
						eventCode: "E-012",
						reasonCode: "R-0096",
						timestamp: 1679571352,
					},
				],
			},
		],
	},
	status: true,
};
export const EventReasonCodeMapping = {
	"E-020-R-0046": "Shipment Created",
	"E-012-R-0095": "Added to dispatch",
	"E-012-R-0096": "Removed from dispatch",
	"E-012-R-0099": "Customer Call Placed",
	"E-012-R-0067": "Container Associated With New Workorder",
	"E-013-R-0059": "Entity Reopened By Client",
	"E-021-R-0063": "Pickup completed",
	"E-010-R-0041": "Delivered To Consignee",
	"E-010-R-0042": "Delivered To Security",
	"E-010-R-0043": "Delivered to Other As Per Consignee",
	"E-021-R-0013": "Delivery Rescheduled",
	"E-021-R-0020": "Payment Mode/Amount Dispute",
	"E-021-R-0022": "Customer Asked For Open Delivery",
	"E-021-R-0023": "Consignee Opened Package And Refused To Accept",
	"E-021-R-0024": "Entry Restricted Area",
	"E-021-R-0025": "Address Quality Issue",
	"E-021-R-0026": "Not Attempted",
	"E-021-R-0027": "Consignee Refused Order",
	"E-021-R-0028": "Consignee Seized Package",
	"E-021-R-0029": "Consignee Unavailable",
	"E-012-R-0065": "Job completed",
	"E-021-R-0035": "Delivery failed",
	"E-021-R-0036": "Delivery failed",
	"E-020-R-0069": "Job failed",
	"E-011-R-0066": "Attempt count exhausted",
	"E-011-R-0058": "Cancelled as per client request",
	"E-011-R-0102": "Cancelled as per consignee request",
	"E-019-R-0082": "Job Creation Failed",
};
