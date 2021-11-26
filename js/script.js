// Elements
var subTypeElement = document.querySelector("#subscription");
var subDurationElement = document.querySelector("#months");
var result = document.querySelector(".result");
var subType = "basic";
var subDuration = 1;

// create change event listeners
subTypeElement.addEventListener("change", function (e) {
	subType = e.target.value;
	// console.log(subType);
	updateSubscriptionDiv();
});

subDurationElement.addEventListener("change", function (e) {
	subDuration = Number(e.target.value);
	// console.log(subDuration);
	updateSubscriptionDiv();
});

// function to calculate cost
var updateSubscriptionDiv = function () {
	var monthlyCost = 5; // basic
	if (subType === "standard") {
		monthlyCost = 7;
	} else if (subType === "premium") {
		monthlyCost = 10;
	}
	var total = subDuration * monthlyCost;
	result.innerText = `You have chosen a ${subDuration} month ${subType} for $${total}.`;
};
