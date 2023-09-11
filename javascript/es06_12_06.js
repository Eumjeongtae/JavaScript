/** 레스트 매개변수 */
const runners = ['Tom','Paul','Mark','Luke'];
const [first, second, ...losers] = runners;

console.log(...losers);