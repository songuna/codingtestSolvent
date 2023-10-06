function solution(num_list) {
    let sum =[0,0];
    for (let i=0; i<num_list.length; i++){
       (num_list[i] % 2 === 0) ? sum[0]++ : sum[1]++;
    } 
    return sum;
}