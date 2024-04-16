const array = [
  [1, 1]
];

  // [1,2,3],
  // [4,5,6],
  // [7,8,9]

  // [1,2,3,1],
  // [4,5,6,4],
  // [7,8,9,7],
  // [1,2,3,1]

  // [1,2,3,1,2],
  // [4,5,6,4,5],
  // [7,8,9,7,8],
  // [1,2,3,1,2],
  // [4,5,6,4,5]

  // [1,2,3,1,2,3],
  // [4,5,6,4,5,6],
  // [7,8,9,7,8,9],
  // [1,2,3,1,2,3],
  // [4,5,6,4,5,6],
  // [7,8,9,7,8,9]

function snail(arr) {
  let Snail = []
  let repetitions = Math.ceil(arr.length / 2)
  for (let i = 0; i < repetitions; i++) {
    Snail = loopForward(Snail, arr, i)
    Snail = loopBackward(Snail, arr, i)
  }
  return Snail;
}
function loopForward(Snail, arr, i) {
    for (let j = i; j < arr.length; j++) {
        Snail = getRow(Snail, j, arr, i);
        Snail = getColumn(Snail, j, arr, i);
        Snail = getRowReversed(Snail, j, arr, i);
    }
    return Snail
}
function loopBackward(Snail, arr, i) {
    for (let j = arr.length - 1; j > -1; j--) {
        Snail = getColumnReversed(Snail, j, arr, i);
    }
    return Snail
}
function getRow(Snail, j, arr, i) {
    if(i !== 0) {
        arr[i].pop()
        arr[i].shift()
    }
  return j === i
    ? [...Snail, ...arr[i]]
    : Snail
}
function getColumn(Snail, j, arr, i) {
  return j > i && j < arr.length - (i + 1)
    ? [...Snail, arr[j][arr[j].length - (i + 1)]]
    : Snail
}
function getRowReversed(Snail, j, arr, i) {
  if(i !== 0) {   
      arr[j].pop()
      arr[j].shift()
  }
  return j === arr.length - (i + 1) && j !== 0
    ? [...Snail, ...arr[arr.length - (i + 1)].reverse()]
    : Snail
}
function getColumnReversed(Snail, j, arr, i) {
  return j > i && j < arr.length - (1 + i)
    ? [...Snail, arr[j][0]]
    : Snail
}

// console.log(snail(array));



/* 
    Recorro posicion 0
    Recorro las demas posiciones tomando la ultima posicion
    Recorro la ultima posicion en reversa
    Recorro la primera posicion en reversa excepto el la primera posicion
*/


const arr1 = [
  [1,2,3,1],
  [4,5,6,4],
  [7,8,9,7],
  [1,2,3,1]
]

let finalArray = []

while (arr1.length){
  finalArray.push(...arr1.shift())
  for (var i = 0; i < arr1.length; i++) {
    finalArray.push(arr1[i].pop());
  }
  finalArray.push(...(arr1.pop() || []).reverse())
  for (var i = arr1.length - 1; i >= 0; i--){
    finalArray.push(arr1[i].shift())
  }
}

console.log(finalArray)
