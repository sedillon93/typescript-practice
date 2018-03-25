'use strict';

export class Person {
  constructor(name, age, job){
    this.name = name;
    this.age = age;
    this.job = job;
  }
  name: string;
  age: number;
  job: string;
  speak(){
    return 'hello';
    // return `Hello my name is ${this.name} and I am a ${this.job}`
  }
}