function getHTML() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('html')
        }, 1000);
    })
}

function getCSS() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('css')
        }, 1000);
    })
}

function getJS() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('js')
        }, 1000);
    })
}

async function getResult() {
    const html = await getHTML();
    const css = await getCSS();
    const js = await getJS();

    return [html,css,js]
}
getResult().then((result)=> console.log(result))

// getHTML()
//     .then((html) => {
//         getCSS()
//             .then((css) => {
//                 getJS()
//                     .then((js) => {console.log([html , css ,js]) })
//             })
//     })

