function extend(arr, n) {
  const v = n * (n - 1) + 1;
  var isOdd = n % 2 !== 0;

  arr[n - 1] = [];
  arr[n - 1][n - 1] = v;

  for (let i = n - 2, c = v, t = v; i > -1; i--) {
    isOdd ? c-- : c++;
    isOdd ? t++ : t--;
    arr[i][n - 1] = t;
    arr[n - 1][i] = c;
  }
  return arr;
}
function triangleArr(n) {
  if (n === 1) return [[1]];
  return extend(triangleArr(n - 1), n);
}

function printTriangleArr(n) {
  const triangle = triangleArr(n)
  triangle.forEach(row => {
    console.log(row.join(','), '\n');
  })
}
// console.log(triangleArr(1));
// console.log(triangleArr(2));
// console.log(triangleArr(3));
// console.log(triangleArr(4));
// console.log(triangleArr(5));
console.log(printTriangleArr(6));
