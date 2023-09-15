
const a = 200;  // 글로벌(전역) 변수
{
    const a = 100; //로컬 (멤버)변수 
    console.log(a); 
}
console.log(a); 