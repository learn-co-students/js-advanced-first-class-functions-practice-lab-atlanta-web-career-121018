// Code your solution in this file!
function logDriverNames(drivers) {
    return drivers.forEach(function(driver){
        console.log(driver.name);
    })
} 

function logDriversByHometown(drivers, htown) {
    return drivers.forEach(function(driver){
        if (driver.hometown === htown)
            console.log(driver.name);
    })
}

function driversByRevenue(drivers) {
    return drivers.slice().sort(function(a,b){
        return a.revenue - b.revenue;
    })
}

function driversByName(drivers) {
    return drivers.slice().sort(function(a,b){
        return a.name.localeCompare(b.name)
    })
} 

function totalRevenue(drivers) {
    return drivers.reduce(function(total,current){
       return total + current.revenue
    },0)
} 
 // 0 = initial value --> reduce(fn,initialvalue)

function averageRevenue(drivers) {
    return totalRevenue(drivers)/drivers.length
} 