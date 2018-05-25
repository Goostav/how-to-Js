var samsungGalaxyS6 = new Phone("Samsung", "Galaxy S6", "Android 18", 1750, "gray");
var iPhone6S = new Phone("Apple", "iPhone 6S", "Ox5", 2250, "silver");
var onePlusOne = new Phone("One Plus", "One", "Android 17", 1970, "black");


function Phone(brand, model, os, price, color) {
	this.brand = brand;
    this.model = model;
    this.os = os;
	this.price = price;
	this.color = color;
}

Phone.prototype.printInfo = function() {
	console.log("The phone brand is " + this.brand + ", model: " + this.model + ", operating system is " + this.os + ", color is " + this.color + " and the price is " + this.price + "zł.");
}

samsungGalaxyS6.printInfo();
iPhone6S.printInfo();
onePlusOne.printInfo();