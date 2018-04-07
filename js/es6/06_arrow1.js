// let circleArea = function(pi, r) {
//     let area = pi * r * r;
//     return area;
// };

// 익명함수는 Arrow 함수로 변경 가능해짐
// 1. function을 없애고 파라미터와 {} 사이에 => 삽입
// 2. 파라미터가 한개면 괄호 생략 가능
// 3. 한줄이면 중괄호 생략 가능
// 4. 한줄이면 return 생략 가능


let circleArea = (pi*r) => pi * r * r;



// 위의 문장을 한줄로 작성하시오.

let result = circleArea(3.14, 3);

console.log(result); //실행 결과 "28.26"
