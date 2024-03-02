function moveZeros(arr) {
    let manyZero = 0;
    for(let i = 0; i < arr.length; i++){
     if(arr[i] === 0){
       arr.splice(i,1);
       i--;
       manyZero += 1;
     }
    }
    for(let j = 0; j < manyZero; j++){
      arr.push(0);
    }
    let newArr = arr;
    return newArr;
}
console.log(moveZeros([ 9, 0, 9, 1, 2, 1, 1, 3, 1, 9, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0 ])); 

