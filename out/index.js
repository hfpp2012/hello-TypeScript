"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// import sum from 'lodash-ts/sum';
var _ = __importStar(require("lodash"));
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var foo = new Person();
foo.firstName = "11";
console.log(foo.firstName);
var a = [1, 2, 3];
var c = _.reverse(a);
// let c = sum(a);
console.log(c);
