1. JavaScript : ES6(ECMA Script 6)
 - Basic(문법) - let, const, function, class, Iterater
 - Advance(내부구현) - Scope, Hoisting, Closer, Prototype
 
2. scope란?
 - 식별자(변수, 함수, 클래스..)의 유효한 범위, 영역
 - 변수를 참조할 수 있는 유효한 범위, 영역
 
 스코프 정의 - {}(블럭) 딘위로 정의됨
 블럭ex : 블럭({}), 함수(function(){}), 제어문 (for{}, if{})..
 블럭 내부애서 블럭 외부의 변수를 참조 가능, 
 블럭 외부에서 블럭 내부의 변수는 참조 불가능
 
 블럭을 이용하여 식별자의 Scope를 정의
 --> 이름 충돌 방지, 메모리 절약

  ** 식별자(변수)는 최대한 필요한 블럭에서 정의하여 사용!
 
 const a = 200;  // 글로벌(전역) 변수
 {
     const a = 100; //로컬 (멤버)변수 
    //  console.log(a); //100
 }
//  console.log(a); //200



3. 가비지 컬렉터(Garbage Collector)
 + C언어 - 개발자가 메모리 선언, 할당, 데이터 처리, 메모리 반환(삭제)
 * JAVA, C#, JS - 메모리 관리해주는 GC(Garbage Collertor)가짐

4. 실행 컨텍스트(Execution Context)
 - 실행 슨서와 스코프를 기억하고있는
   렉시컬 환경 오브젝트(Lexical Environment Object)를 생성하여
   관리하며 렉시컬 환경 오브젝트는 각각의 스코프 체이닝으로 연결됨
 - 코드 맨 안쪽의 블럭이 맨 먼저 생성됨  

 [스코프란?]
 식별자(변수,함수)의 유효한 범위를 의미하며, 블럭단위로 정의됩니다.
 블럭안에서 정의된 식별자는 블럭이 종료되면 GC의 대상이 됩니다.
 스코프 외부에서 스코프 내부의 식별자는 참조가 불가능 하지만
 내부에서 외부의 스코프의 식별자는 참조가 가능합니다. 
 참조가 가능한 이유는 실행 컨텍스트에 있는 렉시컬 환격 오브젝트가 
 스코프 단위로 정보를 기억하고 있으며 맨 안쪽에 생성되는 스코프 부터
 체이닝을 이용하여 연결되어 있기 때문. 이렇게 생성된 LEO를 통해
 스코프의 참조가 가능.
 그래서, 스코프를 사용할 떄 메모리 절약과 성능을 고려한다면
 식별자 선언과 사용은 필요한 블럭에서 정의하고 호출
 

 5. 호이스팅(Hoisting)
 - 자바스크립트 엔진(인터프리터)이 실행 하기전에 변수, 함수, 클래스등을
   최상단으로 끌어올리는 작업.
 - ES6 이전에는 변수, 클래스는 호이스팅 작업시 선언과 초기화가 함꼐
   진행되었으나, ES6부터는 선언만 가능해짐 
 - ES6 기준으로 let,const 키워드가 등장함
 - var 사용 권장하지 않음, let ,const를 사용하면 명확한 프로그래밍 가능

6. var 특징
 - 다른 언어와 코딩 방식(변수 할당등)의 차이로 디버길이 어려움
 - 코드의 가독성과 유지보수 측면에서 좋지 않음
   1) 변수 선언시 키워드가 없어도 사용 가능하므로, 선언인지 재할당인지 구분x
      ex) name = '홍길동; 
   2) 중복 선언이 가능함
   3) 블럭 단위 스코프가 안됨
   4) 함수레벨 스코프는 지원됨

7. 프로토타입(Prototype)
 - 자바스크립트에서 객체지향 적으로 프로그래밍을 하기 위해
   프로토타입이 제공되며, 공통적인 특징, 기능 , 상태등을 
   저장하여 필요한 객체에게 상속을 통해 적용할 수 있다.     
 - 최상위 프로토타입(클래스)은 Object로 생성되는 모든 객체는
   상속을 받아 구현된다.

8. 클로저(Closuer)
 - 함수에서 사용되는 충첩 함수 정의로 생성되는 블럭 스코프를
   통해 내부 함수 스코프에서 외부의 함수 스코프에 접근 가능
   하도록 허용하는 것을 의미함


 [Hoisting]
 인터프리터가 코드를 실행하기 전에 함수, 변수, 클래스 또는 임포트(import)의 선언문을 
 해당 범위의 맨 위로 이동시키는 과정, 일부에서는 let, const 및 class를 
 호이스트되지 않는 것으로 보는 것을 선호하는데,
  그 이유는 temporal dead zone이 선언 이전의 변수 사용을 엄격하게 금지하고 있기 때문

 [Closer]
 주변 상태(어휘적 환경)에 대한 참조와 함께 묶인(포함된) 함수의 조합. 
 즉, 클로저는 내부 함수에서 외부 함수의 범위에 대한 접근을 제공합니다. 
 JavaScript에서 클로저는 함수 생성 시 함수가 생성될 때마다 생성

 [Prototype]
 클래스나 객체의 내용 복사 없이도 상속의 효과를 구현할 수 있게 해주는 방법