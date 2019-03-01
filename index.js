// 打印机 A
var PrinterA = /** @class */ (function () {
    function PrinterA() {
    }
    // 风景画
    PrinterA.prototype.printLandscape = function () {
        console.log("printing in landscape");
    };
    return PrinterA;
}());
// 打印机 B
var PrinterB = /** @class */ (function () {
    function PrinterB() {
    }
    // 肖像画
    PrinterB.prototype.printPortrait = function () {
        console.log("printing in portrait");
    };
    return PrinterB;
}());
function doPrint(pt) {
    if (pt.pageOrientation === "landscape") {
        pt.printLandscape();
    }
    else if (pt.pageOrientation === "portrait") {
        pt.printLandscape();
    }
    else {
        var unknownPrinter = pt;
    }
}
