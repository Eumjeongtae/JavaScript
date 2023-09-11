/** 함수와 스프레드 연산자 */
const name = ['Alberto','Montalesi'];
function greet(first, last){
    console.log(`Hello~ ${first} ${last}`);
}

greet(...name);  //Hello~ Alberto Montalesi

//지정된 인수보다 더 많은 값을 제공하면 어떻게 될까?
const name2 = ['Jon','Paul','Jones'];
function greet(first, last){
    console.log(`Hello~ ${first} ${last}`);
}

greet(...name2);  //Hello~ Jon Paul

/** 객체 리터럴과 스프레드 */
let person = {
  name : 'Alberto',
  surname : 'Montalesi',
  age : 30,
};

let clone = {...person};
console.log(clone);

//person 속성 추가
person.addr = 'gangnam';

console.log(person);
console.log(clone);