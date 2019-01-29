// Code your solution in this file!


// — Receives an array of driver objects and logs the name attribute of each driver to the console.
function logDriverNames(drivers) {
    drivers.forEach(function(obj, i, arr) {
        console.log(obj.name);
        console.log(arr);
    });
};


// — Receives an array of driver objects as the first argument and a location as the second argument. The function logs to the
// console the name attribute of each driver whose hometown matches the string passed in as the 'location' argument.
function logDriversByHometown(drivers, location) {
    drivers.forEach(function(obj, i, arr) {
        if (obj.hometown === location){
            console.log(obj.name);
        };
    });
};

// — Receives an array of driver objects and returns a new array of driver objects sorted by their revenue attribute from lowest to highest.
function driversByRevenue(driver) {
    return driver.slice().sort((a, b) => a.revenue - b.revenue);
};

// — Receives an array of driver objects and returns a new array of driver objects sorted by their name attribute from A to Z. Here, you may have to use the String.prototype.localeCompare() method.

function driversByName(driver) {
    return driver.slice().sort((a, b) => a.name.localeCompare(b.name));
};


// — Receives an array of driver objects and returns the sum of the revenue earned by each driver.
function totalRevenue(driver) {
    return driver.reduce(function (a, b) {
        return a + b.revenue
     }, 0);
};


// — Receives an array of driver objects and returns the average revenue earned by each driver.
function averageRevenue(drivers) {
    return (totalRevenue(drivers)) / drivers.length;
};
