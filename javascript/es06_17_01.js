// Iterator protocol, iterable protocol 포함하여 셍상된 내장 객체는 
//순환 참조가 가능하다. spread 얀산자 , for .. of 사용가능

const strArray = ['바나나', '오렌지', '복숭아']
for (str of strArray) {
    // console.log(str);
}

const charArray = "hello,javascript"

for (char of charArray) {
    // console.log(char);
}

const tmap = new Map();

tmap.set('0', 'test1');
tmap.set(1, 'test2');
//[Symbol.iterator]

const tmapArray = tmap[Symbol.iterator]();
// console.log(tmapArray);
for (const ta of tmapArray) {
    // console.log(ta);

}

const tObj = {
    name: '홍길동',
    age: 20,

}

// const tArray = tObj[Symbol.iterator]();


// for (const ob of tArray) {
// console.log(ob);
// }

const foo = function* () {
    yield 'a';
    yield 'b';
    yield 'c';
};


let str2 = '';
for (const val of foo()) {
    str2 = str2 + val;
}

// console.log(str2);
// Expected output: "abc"

const foo_gen = foo();
console.log(foo_gen.next());
foo_gen.return()
console.log(foo_gen.next());
console.log(foo_gen.next());
console.log(foo_gen.next());

// while (true) {
//     const data = foo_gen.next()

//     if(!data.done) {
//         console.log(data.value);
//     } else{
//         break;
//     }
    
// }

