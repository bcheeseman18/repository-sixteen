// import test from 'ava';

module.exports = {
    // license: function(plate) {
    //     return /[A_Z0-9]{3} ?[A-Z0-9]{3}/.test(plate); 
    //     }, 
    range: function (min, max) {
        let result = [];
        for (let i = min; i <= max; i++) {
            result.push(i);
        }
        return result;
    }, 

    map: function (arr, func) {
        let newArr = [];
        for (let i = 0; i < arr.length; i++) {
            newArr.push(func(arr[i]));
        }
        return newArr;
}, 

filter: function (arr, func) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i])) { // dont need to put === true, 
            newArr.push(arr[i]);
        }
    }
    return newArr;
}, 

reduce: function reduce(arr, func, start) {
    //reduce takes an array and updates it to single thing (not an array)
    let current = start;
    for (let i = 0; i < arr.length; i++) {
        console.log('before function:' + current)
        current = func(current, arr[i]);   //takes current value and uptdates it after the function is called with the two parameters
        console.log('after function:' + current)
    }
    return current;
}, 

all: function (arr, func) {
    for (let i = 0; i < arr.length; i++) {
        if (!func(arr[i])) { //if one of the elements is false, return false
            return false;
        }
    }
    return true;
}, 

some: function (arr, func) {
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i])) {
            return true;
        }
    }
    return false;
}, 

find: function (arr, func) {
    for (let i = 0; i < arr.length; i++) {
        console.log("i = " + i);
        if (func(arr[i])) {
            return arr[i];
        }
    }
    return null;
}

};



    // reduce: reduce,


// RANGE -----------------------------------------------

// let num1 = 5;
// let num2 = 10;

// function range(min, max) {
//     let result = [];
//     for (let i = min; i <= max; i++) {
//         result.push(i);
//     }
//     return result;
// }
// console.log(range(num1, num2));


//-------------------------------------------------------


// MAP --------------------------------------------------



// let arr = [1, 2, 3]


// function map(arr, func) {
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         newArr.push(func(arr[i]));
//     }
//     return newArr;
// }

// console.log(arr, func);


// ------------------------------------------------------

// FILTER -----------------------------------------------

// function filter(arr, func) {
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (func(arr[i])) { // dont need to put === true, 
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr;
// }

// ------------------------------------------------------

// REDUCE -----------------------------------------------

// function reduce(arr, func, start) {
//     //reduce takes an array and updates it to single thing (not an array)
//     let current = start;
//     for (let i = 0; i < arr.length; i++) {
//         console.log('before function:' + current)
//         current = func(current, arr[i]);   //takes current value and uptdates it after the function is called with the two parameters
//         console.log('after function:' + current)
//     }
//     return current;
// }

// function tallest(tall, next) {
//     if (tall > next) {
//         return tall;
//     } else {
//         return next;
//     }
// }

// reduce([6, 9, 10, 4], tallest, 0);



// ------------------------------------------------------

// ALL --------------------------------------------------

// function all(arr, func) {
//     for (let i = 0; i < arr.length; i++) {
//         if (!func(arr[i])) { //if one of the elements is false, return false
//             return false;
//         }
//     }
//     return true;
// }

// // ------------------------------------------------------

// // SOME -------------------------------------------------

// function some(arr, func) {
//     for (let i = 0; i < arr.length; i++) {
//         if (func(arr[i])) {
//             return true;
//         }
//     }
//     return false;
// }


// // ------------------------------------------------------

// // FIND -------------------------------------------------

// function find(arr, func) {
//     for (let i = 0; i < arr.length; i++) {
//         console.log("i = " + i);
//         if (func(arr[i])) {
//             return arr[i];
//         }
//     }
//     return null;
// }

// function startWithS(name) {
//     return (name[0] === 's' || name[0] === 'S');
// }

// console.log("find result = " + find(['Peg', 'Tara', 'Smith', 'Samsonite', 'Kip'], startWithS));

// ------------------------------------------------------