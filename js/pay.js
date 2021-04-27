var app=angular.module("mymodule", []);

app.controller("datacontroller" , function($scope) {
	var listplans = [
		{plan: "plan1", name: "Mini", benefits: "Listen to music ad-free on mobile. Group Session. Download 30 songs on 1 mobile device.", price: 7} ,
		{plan: "plan2", name: "Individual", benefits: "Listen to music ad-free. Group Session. Download 10k songs/device on 5 devices.", price: 129} ,
		{plan: "plan3", name: "Duo", benefits: "Listen to music ad-free. Group Session. Download 10k songs/device on 5 devices per account.", price: 165} ,
		{plan: "plan4", name: "Family", benefits: "For family who live together. Block explicit music. Listen to music ad-free. Group Session. Download 10k songs/device on 5 devices.", price: 199}
	];
	$scope.plans = listplans;
});