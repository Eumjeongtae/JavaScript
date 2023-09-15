// const kobisData = v=>{
//   return new Promise( async(resolve, reject) => {
//     let result = await fetch('https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20230907')
//     let data = await result.json()

//     resolve(data)
//   })
// }


function showDailyList(kobis) {
  let data = kobis.boxOfficeResult

  data.dailyBoxOfficeList.forEach(v => {
    let { rank, movieNm, openDt, audiAcc, salesAcc, movieCd } = v
    document.querySelector('ul').insertAdjacentHTML('beforeend', `
                <li>
                  순위 :${rank},
                  <a href='#'  data-value='${movieCd}' class='movieNm'>영화제목 :  ${movieNm},</a>
                  개봉일 : ${openDt},
                  누적관객수: ${audiAcc},
                  누적매출액:  ${salesAcc},
                </li>
                `);

    document.querySelector('li:last-child .movieNm').addEventListener('click', e => {
      e.preventDefault()
      movieCode(e.target.getAttribute('data-value'))
    })

  })
}






const kobisData = (date = '20230907') => {
  fetch(`https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=${date}`)
    .then((response) => response.json())
    .then((kobis) => {
      showDailyList(kobis)
    }) //콜백 합수 안에서만 사용
    .catch(() => { console.log('fetch 싱패'); })
}
// console.log(kobisData());

const movieCode = (key = '20224667') => {
  fetch(`https://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=f5eef3421c602c6cb7ea224104795888&movieCd=${key}`)
    .then((response) => response.json())
    .then(data => {
      movieContent(data)
    })
    .catch(() => console.log('fetch실패'))

}

function movieContent(mContent) {
  console.log(mContent);
}



document.addEventListener('DOMContentLoaded', e => {
  // fn()
  kobisData()
  document.querySelector('#search').addEventListener('click', e => {
    document.querySelector('ul').innerHTML = ''
    let txt = document.querySelector('#searchDate').value
    date = txt
    kobisData(date)

  })

})