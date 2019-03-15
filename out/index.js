"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
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
_.reverse(a);
console.log(a);
_.reverse('xxx');
