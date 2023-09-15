//객체(오브젝트)의 타입 비교 : Object.prototype.__proto__

const obj1 = new Object()
const obj2 = new Object()

// console.log(obj1.__proto__==obj2.__proto__);

const array1 = ['hong','kim','park']; // Array > Object

// console.log(array1.values()); 
//api 상속구조 이해

//클래스 정의 => 여러개의 객체를 생성하는 틀

class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
}

class Actor extends Person{
    constructor(name,age,movieName){
        //Actor 객체가 생성되기 전에 Person 생성되어야 하므로
        // Person의 생성자를 반드시! 맨처음 호출해야됨
        super(name,age);
        this.movieName = movieName;
    }
}

//eat() 함수를 프로토타입으로 정의함
Person.prototype.eat = function(){
    // console.log(this);
    console.log(`${this.name}가 밥을 먹어용`);
}

Actor.prototype.act = function(){
    console.log(this);
    console.log(`${this.name} 배우가 연기를 해요~`);
}

const gong = new Actor('공유',30 ,'도깨비')
const son = new Actor('손석구',20)
const song = new Actor('송혜교',25)

gong.act()
son.act()
song.act()
