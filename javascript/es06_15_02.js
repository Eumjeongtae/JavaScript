/** 클래스 생성 */
class Person{
  //생성자
  constructor(name, age){
      this.name = name;
      this.age = age;
  }

  // info 함수 : static 합수로 생성 --> 클래스명.메소드명 형식으로 호출
  static info(){
    console.log('Person 클래스의 static 메소드');
  }

  //greet 함수
  greet(){
      console.log(`Hi, my name is ${this.name} and I'm ${this.age} years old`);
  }

  //farewell 함수
  farewell(){
      console.log("goodbye friend");
  }
}

const alberto = new Person("Alberto", 30);
alberto.greet();
alberto.farewell();
Person.info()
// alberto.info()