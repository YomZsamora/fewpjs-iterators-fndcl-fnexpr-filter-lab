// Returns all drivers that match the passed in name even if case does not match but letters do
let findMatching = (listOfDrivers, driverName) => {
   return listOfDrivers.filter( driver => {  return driver.toLowerCase() === driverName.toLowerCase() });
}