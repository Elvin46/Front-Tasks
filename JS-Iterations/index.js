
// FILTER ITERATION NATIVE CODE
// -------------------------------------------------------------------------

function filter(array, test) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (test(array[i])) {
            result.push(array[i])
        }
        
    }
    if (result.length==0) {
        return "Not Found"
    }
    return result
} 
function check(value) {
    return value >18;
}
console.log("FILTER: " + filter([12, 23, 45,1 , 18, 100] , check));

// -------------------------------------------------------------------------



// FIND ITERATION NATIVE CODE

// -------------------------------------------------------------------------

function find(array, test) {
    for (let i = 0; i < array.length; i++) {
        if (test(array[i])) {
            return array[i]
        }
    }
    return "Not Found"
} 
function check(value) {
    return value >18;
}
console.log("FIND: " + find([12, 23, 45, 1, 18, 100] , check));

// -------------------------------------------------------------------------



// EVERY ITERATION NATIVE CODE

// -------------------------------------------------------------------------

function every(array, test) {
    let result = 0;
    for (let i = 0; i < array.length; i++) {
        if (test(array[i])) {
            continue
        }
        else{
            return false
        }
    }
    return true
} 
function check(value) {
    return value >18;
}
console.log("EVERY: " + "All over 18 is " + every([12, 23, 45,1 , 18, 100] , check));

// -------------------------------------------------------------------------



// SOME ITERATION NATIVE CODE

// -------------------------------------------------------------------------

function some(array, test) {
    let result = 0;
    for (let i = 0; i < array.length; i++) {
        if (test(array[i])) {
            return true
        }
    }
    return false
} 
function check(value) {
    return value >18;
}
console.log("SOME: " + "Some over 18 is " + some([12, 23, 45,1 , 18, 100] , check));

// -------------------------------------------------------------------------



// MAP ITERATION NATIVE CODE

// -------------------------------------------------------------------------

function map(array, test) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        result[i]=change(array[i])
        
    }
    if (result.length==0) {
        return "Not Found"
    }
    return result
} 
function change(value) {
    return value * 10;
}
console.log("MAP: " + map([12, 23, 45, 1, 18, 100] , change));

// -------------------------------------------------------------------------



// INDEXOF ITERATION NATIVE CODE

// -------------------------------------------------------------------------

function indexof(array, test) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == test) {
            return i
        }
    }
    return "Not Found"
} 
console.log("INDEXOF: " + indexof([12, 23, 45, 1, 18, 100] , 12));