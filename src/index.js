exports.min = function min(array = []) {
    return (array.length === 0) ? 0 : Math.min.apply(null, array);
}

exports.max = function max(array = []) {
    return (array.length === 0) ? 0 : Math.max(...array); // spread syntax бboth are equal alternatives
}

exports.avg = function avg(array = []) {
    return (array.length === 0) ? 0 : array.reduce((acc, curr) => acc + curr) / array.length;
}


// Math.max(list));   # NaN will not work, because max doesn't accept an array as input.
//The first parameter, you pass to apply of any function, will be the this inside that function. But, max doesn't depend on the current context. So, anything would work in-place of Math.  undefined, null, mathю null and undefined will be replaced with the global object
//Обычно используют Function.prototype.apply в случаях, когда хотят использовать элементы массива в качестве аргументов функции.


//alternative with reduce

// exports.min = function min(array = []) {
//     let min =  array.reduce((acc,curr) => { // good to carry value through all loop, wo creating var outside the loop = Infinity
//         return acc > current ? acc = current : acc;
//     })
//     return (array.length === 0) ? 0 : min;
// }

// exports.max = function max(array = []) {
//     let max =  array.reduce((acc,curr) => {
//         return acc < current ? acc = current : acc;
//     })
//     return (array.length === 0) ? 0 : max;
// }

// exports.avg = function avg(array = []) {
//     return (array.length === 0) ? 0 : array.reduce((acc, curr) => acc + curr) / array.length;
// }




// alternative via sort

// exports.min = function min(array = []) {

//     return (array.length === 0) ? 0 : sort(array)[0];;
// }

// exports.max = function max(array = []) {
//     let resArr = sort(array);

//     return (array.length === 0) ? 0 : resArr[resArr.length - 1];
// }

// const sort = array => {
//     return array.sort(digitSortHelper); // wo call
// }

// const digitSortHelper = (a, b) => {
//     if (a > b) return 1;
//     if (a < b) return -1;
//     if (a === b) return 0;
// }
