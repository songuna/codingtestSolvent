function solution(num_list) {
    let sum = 0;
    let sum1 = 0
    
    num_list.map((a, b) => {
        !(b % 2) ? sum += a : sum1+= a;
    })
    return sum1 > sum ? sum1 : sum;
}