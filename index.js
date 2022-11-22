// Code your solution in this file!
function distanceFromHqInBlocks(pickup) {
    if (pickup >= 42) {
        return pickup - 42
    }
    else if (pickup < 42) {
        return 42 - pickup
    }
}

function distanceFromHqInFeet(pickup) {
    if (pickup >= 42) {
        return (pickup - 42) * 264
    }
    else if (pickup < 42) {
        return (42 - pickup) * 264
    }
}

function distanceTravelledInFeet(num1, num2) {
    if (num1 >= num2) {
        return (num1 - num2) * 264
    } else {
        return  (num2 - num1) * 264
    }
}

function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination);
    if (distance <= 400) {
        return 0;
    } else if (distance >= 400 && distance <= 2000) {
        return (distance - 400) * 0.02;
    } else if (distance >= 2000 && distance <= 2500) {
        return 25;
    }else if (distance > 2500) {
        return "cannot travel that far"
    }
}