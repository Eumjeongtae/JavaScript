/** 일반적인 for 루프 */
var fruits = ['apple','banana','orange'];
console.log('----------------->> 일반적인 for 루프');
for(var i=0; i<fruits.length; i++){
    console.log(fruits[i]);
}

/** for of 루프 */
var fruits2 = ['apple','banana','orange'];
console.log('----------------->> for of 루프');
for(const fruit of fruits2){
    console.log(fruit);
}

/** 객체에 대한 반복 */
const car = {
  maker : "BMW",
  color : "red",
  year : "2010",
};

for(const prop of Object.keys(car)){
  const value = car[prop];
  console.log(prop, value);
  console.log(prop, value);
}

/** for in */
const car2 = {
  maker : "BMW",
  color : "red",
  year : "2010",
};

for(const prop in car2){
  console.log(prop, car2[prop]);
}