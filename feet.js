// Convert feet to mile-----------

function feetToMile(input) {
    var result = (input * 0.000189394);
    return result;
}
var output = feetToMile(50);
console.log(output)


// Wood needed for chair table and bed

function woodCalculator(value1, value2, value3) {
    var result1 = value1 * 1;
    var result2 = value2 * 3;
    var result3 = value3 * 5;
    var totalResult = result1 + result2 + result3;
    return totalResult;
}
var totalWood = woodCalculator(5, 10, 50);
console.log(totalWood);


// wood needed for chair table bed if negative number

function woodCalculator(value1, value2, value3) {
    var totalResult = 0;
    if (value1 > 0 && value2 > 0 && value3 > 0) {
        var chair = value1 * 1;
        var table = value2 * 3;
        var bed = value3 * 5;
        totalResult = chair + table + bed;
        // return totalResult;
    }
    else {
        // var negativeResult = console.log('Negative value is not accepted');
        // totalResult = negativeResult;
        console.log('Negative value is not accepted')
    }
    return totalResult;
}
var totalWood = woodCalculator(-5, 10, 50);
console.log(totalWood);

// --------Find Longest Element from array-------

var arr = ['boop', 'bloomburg', 'hello'];

function findLongestElem(arr) {
    let word = "";
    for (let i = 0; i < arr.length; i++) {
        if (word.length < arr[i].length) {
            word = arr[i];
        }
    }
    return word;
}

let result1 = findLongestElem(arr);
console.log(result1);



// -------Find the shortest name from array-----------

var arr = ['john', 'mahmud', 'nasimon', 'Jheather', 'jo', 'moon', 'calibration'];

function findShortestElem(array) {

    let minEle = array[0];

    for (let i = 1; i < array.length; i++) {

        if (array[i].length < minEle.length) {
            minEle = array[i];
        }
    }

    return minEle;
}

let result2 = findShortestElem(arr);
console.log(result2);

// ==============Brick calculate with js================

function brickCalculator(brickAmount) {
    var brick = 0;
    var everyFloorNeededBrick = 1000;
    if (brickAmount <= 10) {
        brick = brickAmount * 15 * everyFloorNeededBrick;
    }
    else if (brickAmount <= 20) {
        var first10Floor = 10 * 15 * everyFloorNeededBrick;
        var remainingFloor = brickAmount - 10;
        var secound10Floor = remainingFloor * 12 * everyFloorNeededBrick;
        brick = first10Floor + secound10Floor;
    }
    else {
        var first10Floor = 10 * 15 * everyFloorNeededBrick;
        var secound10Floor = 10 * 12 * everyFloorNeededBrick;
        var remainingFloor = brickAmount - 20;
        var third10Floor = remainingFloor * 10 * everyFloorNeededBrick;
        brick = first10Floor + secound10Floor + third10Floor;
    }
    return brick;
}


var totalBrickAmount = brickCalculator(30);
console.log(totalBrickAmount);



