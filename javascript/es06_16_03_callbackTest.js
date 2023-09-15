function excute(callback, seconds) {
    if (!seconds) {
        throw new Error('seconds가 0이하임') // 에러 객체를 생성 
        // console.log('error');
        // return
    }
    setTimeout(callback, seconds);

}

try {
    excute(() => {
        console.log('타이머 종료');
    }, 0)
} catch (error) {
    console.log('error');
}


function excute2(seconds) {
    if (!seconds) {
        throw new Error('seconds가 0이하임')
        // console.log('error');
        // return false
    } else {
        setTimeout(() => {
            console.log('타이머 종료');
        }, seconds);
    }
}

try {
    excute2(1000)

} catch (error) {
    console.log('error');
}
