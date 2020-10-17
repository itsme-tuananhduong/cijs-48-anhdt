let arr1 = [1, 2, 3];
let arr2 = [2, 3, 5];

let arr = arr1.concat(arr2);
let obj = {};
let result = [];

for (let i = 0; i < arr.length; i++) {
    if (typeof (obj[`${arr[i]}`]) == 'undefined') {
        result.push(arr[i]);
        obj[`${arr[i]}`] = 1;
    }
}

console.log(result);