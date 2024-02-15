function solution(names) {
    let sum = [];
    for (i=0; i<names.length; i+=5){
        sum.push(names[i]);
    }
    return sum;
}