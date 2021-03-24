// "use strict"

console.log('Hello World!');
console.log('Or no');

var requestURL = "https://www.nbrb.by/api/exrates/currencies[/{cur_id}]"
var request = new XMLHttpRequest();
request.open('GET', requestURL);

