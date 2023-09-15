function excute(callback,seconds){
    console.log(1);
    setTimeout(callback, seconds);
    console.log(3);
}

excute(() =>{
    console.log(2);

},2000)