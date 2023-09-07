/** ES5 template literal */
var name = "홍길동5";
var greeting = "Hello my name is " + name;

console.log(greeting);

/** ES6 template literal */
let name6 = "홍길동6";
let greeting6 = `Hello my name is ${name6}`; //백틱(backtick) 사용

console.log(greeting6);

/** ES5 template literal */
var a = 1;
var b = 10;
console.log('1 * 10 = ' + (a * b)); //1 * 10 = 10 

/** ES6 template literal */
let a6 = 1;
let b6 = 10;
console.log(`1 * 10 = ${a6 * b6}`); //1 * 10 = 10

/** ES5 template literal */
var text = "hello, \
my name is 홍길동 \
how ar you?\ ";
console.log(text);

/** ES6 template literal */
const text6 = `hello,
my name is 홍길동
how are you? `;
console.log(text6);

/** 중첩 템플릿 */
const people = [{
  name: '홍길동',
  age: 27,
},
{
  name: '홍홍',
  age: 27,
},
{
  name: '홍길순',
  age: 31,
},
];
const markup = `
<ul>
    ${people.map(person => `<li> ${person.name} </li>`)}
</ul>
`;
console.log(markup);

/** 삼항 연산자 추가하기 1 */
const isDiscounted = false;

function getPrice(){
    console.log(isDiscounted? "$10" : "$20");
}

// getPrice();

