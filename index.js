function show(x) {
    if (x === undefined) {
        console.log("value not set");
    }
    else if (x === null) {
        console.log("value is null");
    }
    else {
        console.log(x);
    }
}
var x = 10;
// undefined
var y;
var z = null;
show(x);
show(y);
show(z);
