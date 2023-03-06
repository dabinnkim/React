function solution(array) {
    //배열 오름차순
    var answer = array.sort((a,b)=>a-b);
    //배열길이 나누기 2의 정수 값
    var num = Math.floor((array.length)/2)
    return answer[num];
}

console.log(solution([1,2,7,10,11]))