function solution(slice, n) {
    let sum = (n % slice === 0 ? n / slice : n / slice + 1);
    return parseInt(sum);
}