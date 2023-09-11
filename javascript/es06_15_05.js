/** 클래스 상속 */
class Person{

    //생성자 --> new 함수명('변수1','변수2')
    constructor(name, age){ // new 연산자가 호출되어 객체로 생성될떄 호출하는 함수.
        this.name = name;
        this.age = age;
        console.log(`Person name : ${this.name}`);

    }

    // constructor(name, age){ 오버로딩 지원하지 않음;
    //     this.name = name;
    //     this.age = age;
    //     console.log(`Person name : ${this.name}`);

    // }

    greet(){
        console.log(`Hi, my name is ${this.name} and I'm ${this.age} years old`);
    }
}//class Person

//Adult 클래스 : Person 자식 클래스
class Adult extends Person{
    constructor(name, age, work){
        super(name, age);  //Person의 생성자 호출
        this.name = name;
        this.work = work;
        console.log(`Adult name : ${this.name}`);
    }
}

let hong = new Person('홍길동','20')
console.log(hong.name);
console.log(hong.age);
console.log('----------------------------------------------------------------------');

let alberto = new Adult("Alberto", 30, "developer");
console.log(alberto.name);  //30
console.log(alberto.age);  //30
console.log(alberto.work);  //developer
alberto.greet();

hong = alberto
console.log(hong.name);
console.log(hong.work);