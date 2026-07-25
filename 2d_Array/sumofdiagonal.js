

var diagonalSum = function (mat) {
    let sum = 0;
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[i].length; j++) {
            if (i === j || i + j === mat[i].length - 1) {
                sum += mat[i][j];
            }
        }
    }
    return sum;
};

// ---- Test cases ----
const mat1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const mat2 = [
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1]
];

const mat3 = [[5]];

console.log("Result 1:", diagonalSum(mat1)); // Expected: 25
console.log("Result 2:", diagonalSum(mat2)); // Expected: 8
console.log("Result 3:", diagonalSum(mat3)); // Expected: 5