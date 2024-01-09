//Element : ID, Class, tag, CSS selector, HTML collection

//id
var headingNode = document.getElementById('heading');
console.log(headingNode);
console.log("--------");

//class
var headingNodes = document.getElementsByClassName('heading2');
console.log(headingNodes);
console.log("--------");

//tag
var tags = document.getElementsByTagName('h1');
console.log(tags);
console.log("--------");

//CSS selector
var cssSelector = document.querySelector('#heading');
console.log(cssSelector);
console.log("--------");