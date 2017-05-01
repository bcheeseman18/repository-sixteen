import test from 'ava'; 

let func = require('./fn.js');

test('minAndMax', function (t) {
    t.deepEqual(func.range(5, 10), [5, 6, 7, 8, 9, 10] ); 
});


function square(x) {
    return x * x;
}
test('filterArr', function (t) {
    t.deepEqual(func.map([1, 2, 3], square), [1, 4, 9] );
}); 

