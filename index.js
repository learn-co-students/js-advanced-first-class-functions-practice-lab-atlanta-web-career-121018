// Code your solution in this file! 
function logDriverNames(drivers) {
    return drivers.forEach(function(driver) {
        console.log(driver.name)
    })
}

function logDriversByHometown(drivers, location) {
    return drivers.forEach(function(driver) {
        if (driver.hometown === location) {
            console.log(driver.name)
        }
    })
}

function driversByRevenue(drivers) {
    return drivers.slice().sort(function(a,b) {
        return a.revenue - b.revenue
    })
}

function driversByName(drivers) {
    return drivers.slice().sort(function(a, b) {
        return a.name.localeCompare(b.name);
    })
}

const reducer = (accumulator, currentValue) => accumulator + currentValue;

function totalRevenue(drivers) {
    return drivers.reduce(function(accumulator, currentValue) {
        return accumulator + currentValue.revenue
    }, 0)
}

function averageRevenue(drivers) {
    return (totalRevenue(drivers)/drivers.length);
}