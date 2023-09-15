function excute(timeout) {
    return new Promise((resolve, reject) => {
        if (!timeout) {
            reject(new Error('seconds가 0이하임'))
        }
        setTimeout(() => {
            resolve('타이머 종료')
        }, timeout);
        // setTimeout(resolve,timeout)
    })


}

excute(10)
    .then((data) => console.log(data))
    .catch(console.error)
    .finally(() => console.log('프로그램 종료 !'))

