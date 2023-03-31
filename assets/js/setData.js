const stateClasses = {
	COMPLETED: "completed",
	ATTEMPTED: "attempted",
	FAILED: "faild",
	PICKUP: "pick-up",
};

export const identifierClasses = {
	STEP: "step",
	TITLE: "title",
	DATE: "date-text",
	CIRCLE: "count-circle",
	UPDATES_ALL: "allupdate-wrapper",
	INFO: "info",
};

export const identifierIds = {
	MAP: "#map-container",
	ORDER_ID: "#order-id-text",
	ORDER_STATE: "#order-state-text",
};

export const orderStates = {
	"closed:delivered": "Your order is successfully delivered",
};

const getAllStateClassesExcept = (classNameToExclude) => {
	let classString = "";
	for (let className in stateClasses) {
		if (stateClasses[className] !== classNameToExclude) {
			classString = classString + stateClasses[className] + " ";
		}
	}
	return classString;
};

const setStepState = (identifierClass, stateClass) => {
	$(identifierClass)
		?.addClass(stateClass)
		.removeClass(getAllStateClassesExcept(stateClass));
};

const setInnerHtml = (selector, html) => {
	$(selector)?.html(html);
};

export const setMap = ({ lat, lon }) => {
	const mapEmbedCode = `<iframe
		src="https://www.google.com/maps?q=${lat},${lon}&hl=en &z=14&amp;output=embed"
		width="100%"
		height="100%"
		style="border: 0"
		allowfullscreen=""
		loading="lazy"
		referrerpolicy="no-referrer-when-downgrade"
	></iframe>`;

	setInnerHtml(identifierIds.MAP, mapEmbedCode);
};

export const setOrderId = ({ orderID, orderState }) => {
	const orderIdText = `Order ID #${orderID}`;
	const orderStateText = orderStates[orderState];
	setInnerHtml(identifierIds.ORDER_ID, orderIdText);
	setInnerHtml(identifierIds.ORDER_STATE, orderStateText);
};

export const setCompletedState = (identifierClass) =>
	setStepState(identifierClass, stateClasses.COMPLETED);
export const setAttemptedState = (identifierClasses) =>
	setStepState(identifierClasses, stateClasses.ATTEMPTED);
export const setfailedState = (identifierClasses) =>
	setStepState(identifierClasses, stateClasses.FAILED);
export const setPickUPState = (identifierClasses) =>
	setStepState(identifierClasses, stateClasses.PICKUP);
