
/** 삼항 연산자 추가하기 2 */
const artist = {   //name, age와 함께 artist 객체 생성
  name : "잔나비",
  age : 20,
  song : "주저하는 연인들을 위해",
};

//artist 객체에 song 프로퍼티가 있을 때만 문장에 추가하고,
//없으면 아무것도 반환하지 않음
const text = `
  <div>
      <p>${artist.name} : ${artist.age}살 </p>
      ${artist.song? `<p>대표곡 :  ${artist.song}</p>` : ''}
  </div>
`;

console.log(text);


/** 템플릿 리터럴에 함수 전달하기 */
const groceries = {
  meat : "pork chop",
  veggie : "salad",
  fruit : "apple",
  others : ['murshrooms','instant noodles','instant soup'],
};

//groceries의 각  값에 대해 map()을 수행하는 함수
function groceryList(others){
  return `
      <p>
          ${others.map(other => `<span>${other}</span>`).join('\n')}
      </p>
  `;
}

//p 태그 내  모든 groceries를 출력. 마지막은 **others** 배열의 모든 원소를 포함
const markup = `
  <div>
      <p>${groceries.meat}</p>
      <p>${groceries.veggie}</p>
      <p>${groceries.fruit}</p>
      <p>${groceryList(groceries.others)}</p> 
  </div>
`;

console.log(markup);

/** 태그된 템플릿 리터럴 */
let person = "hong";
let age = 25;

function myTag(strings, personName, personAge){
    //strings : ['That ',' is a',' !!']
    let str = strings[1];  //'is a'
    let ageStr;

    personAge > 50? ageStr="grandPa" : ageStr="youngster";
    
    return personName + str + ageStr;
}

let sentence = myTag`That ${person} is a ${age}!!`;  //strings : ['That ',' is a',' !!'] 
// myTat(['That ',' is a',' !!'] ,person , age)
console.log(sentence);  //hong is a youngster