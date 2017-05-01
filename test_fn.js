import test from 'ava'; 

let func = require('./fn.js');

test('minAndMax', function (t) {
    t.deepEqual(func.range(5, 10), [5, 6, 7, 8, 9, 10] ); 
});


function square(x) {
    return x * x;
}
test('mapArr', function (t) {
    t.deepEqual(func.map([1, 2, 3], square), [1, 4, 9] );
}); 


function even(x) {
  return x % 2 === 0;
}
test('filterArr', function (t) {
    t.deepEqual(func.filter([1, 2, 3], even), [2]);
}); 


function tallest(tall, next) {
    if (tall > next) {
        return tall;
    } else {
        return next;
    }
}
test('reduceArr', function (t) {
    t.deepEqual(func.reduce([6, 9, 10, 4], tallest, 0), 10);
}); 

function divisByThree(num) {
  return num % 3 === 0;
}

test('allArr', function (t) {
    t.deepEqual(func.all([3, 6, 9, 300], divisByThree), true);
    t.deepEqual(func.all([2, 6, 9, 300], divisByThree), false);
    t.deepEqual(func.all([2, 4, 300], divisByThree), false); 
}); 


test('someArr', function (t) {
    t.deepEqual(func.some([3, 6, 9, 300], divisByThree), true);
    t.deepEqual(func.some([2, 6, 9, 300], divisByThree), true);
    t.deepEqual(func.some([2, 4, 300], divisByThree), true);
}); 


function startWithS(name) {
  return (name[0] === 's' || name[0] === 'S');
}
test('findArr', function (t) {
    t.deepEqual(func.find(['Peg', 'Tara', 'Smith', 'Samsonite', 'Kip'], startWithS), 'Smith');
     t.deepEqual(func.find(['Peg', 'Tara', 'Mith', 'Amsonite', 'Kip'], startWithS), null);

    }); 