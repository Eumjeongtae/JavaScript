// const kobisData = v=>{
//   return new Promise( async(resolve, reject) => {
//     let result = await fetch('https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20230907')
//     let data = await result.json()

//     resolve(data)
//   })
// }



const kobisData = (date = '20230907') => {
  fetch(`https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=${date}`)
    .then((response) => response.json())
    .then((kobis) => {
      let data = kobis.boxOfficeResult

      data.dailyBoxOfficeList.forEach(v => {
        let { rank, movieNm, openDt, audiAcc, salesAcc } = v
        document.querySelector('ul').insertAdjacentHTML('beforeend', `
                    <li>
                      순위 :${rank},
                      영화제목 : ${movieNm},
                      개봉일 : ${openDt},
                      누적관객수: ${audiAcc},
                      누적매출액:  ${salesAcc},
                    </li>
                    `);
      })
    }) //콜백 합수 안에서만 사용
    .catch
}
// console.log(kobisData());



document.addEventListener('DOMContentLoaded', e => {
  // fn()
  kobisData()
  document.querySelector('#search').addEventListener('click', e => {
    document.querySelector('ul').innerHTML=''
    let txt = document.querySelector('#searchDate').value
    date = txt
    kobisData(date)

  })

})