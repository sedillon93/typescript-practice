'use strict';
exports.__esModule = true;
var Person = /** @class */ (function () {
    function Person(name, age, job) {
        this.name = name;
        this.age = age;
        this.job = job;
    }
    Person.prototype.speak = function () {
        return 'hello';
        // return `Hello my name is ${this.name} and I am a ${this.job}`
    };
    return Person;
}());
exports.Person = Person;
