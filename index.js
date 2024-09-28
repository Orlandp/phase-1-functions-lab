// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    // Scuber headquarters is at 42nd Street
    const hqStreet = 42;
    // Return the absolute number of blocks between the pickup location and HQ
    return Math.abs(someValue - hqStreet);
}
function distanceFromHqInFeet(someValue) {
    // Each block is 264 feet
    const feetPerBlock = 264;
    // Get the block distance and multiply it by 264 to get the distance in feet
    return distanceFromHqInBlocks(someValue) * feetPerBlock;
}
function distanceTravelledInFeet(start, destination) {
    const feetPerBlock = 264;
    // Calculate the number of blocks traveled, then multiply by feet per block
    return Math.abs(start - destination) * feetPerBlock;
}
function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    
    if (distance <= 400) {
        return 0; // First 400 feet are free
    } else if (distance > 400 && distance <= 2000) {
        // Fare is 2 cents per foot after the first 400 feet
        return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
        return 25; // Flat fare for distances between 2000 and 2500 feet
    } else {
        return 'cannot travel that far'; // Trips over 2500 feet are not allowed
    }
}
