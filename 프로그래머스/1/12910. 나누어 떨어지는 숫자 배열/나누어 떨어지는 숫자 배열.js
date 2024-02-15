function solution(arr, divisor) {
    let sum = [];
    
    for(let i=0; i< arr.length; i++){
        if(arr[i] % divisor === 0) sum.push(arr[i]);
    }
    return sum.length === 0 ? [-1] : sum.sort((a,b) => a-b);
}