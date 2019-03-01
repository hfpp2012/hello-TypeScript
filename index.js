function getArray(items) {
    return new Array().concat(items);
}
var myNumArray = getArray([100, 200, 300]);
var myStrArray = getArray(["hello", "world"]);
console.log(myNumArray);
console.log(myStrArray);
myNumArray.push(400);
myStrArray.push("rails365");
console.log(myNumArray);
console.log(myStrArray);
myNumArray.push("hfpp2012");
myStrArray.push(500);
console.log(myNumArray);
console.log(myStrArray);
