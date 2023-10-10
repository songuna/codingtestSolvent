function solution(array, n) {
    let sum = [];
    for(let i=0; i<array.length; i++){
        if(array[i]===n){
            sum.push(array[i]);
        }
    }
    return sum.length;
}