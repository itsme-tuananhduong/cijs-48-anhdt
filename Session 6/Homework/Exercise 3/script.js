let arr = [1, 3, 2, 6, 1, 2];
let k = 3;

function findIndex(arr, k) {
    let result = '';
    for (let i = 0; i < arr.length - 1; i++) {
        for (let y = i + 1; y < arr.length; y++) {
            if ((arr[i] + arr[y]) % k == 0) result += `(${i}, ${y}) `;
        }
    }
    return result;
}

console.log(findIndex(arr, k));