/** set/get 메소드 */
class Person{
    //생성자
    constructor(name, surname){
        this.name = name;
        this.surname = surname;
        this.nickname = "";
    }

    //set method
    set nicknames(value){
        this.nickname = value;
        console.log(this.nickname);
    }

    //get method
    get nicknames(){
        console.log(`Your nickname is ${this.nickname}`);
    } 
}//class Person

const alberto = new Person("Alberto", "Montalesi");
alberto.nicknames = "Albi";
alberto.nicknames;

const hong = new Person('홍','길동')
hong.nicknames = 'honghong';