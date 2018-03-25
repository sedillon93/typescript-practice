let Person = require('../person');
describe(`person`, function(){
  
  beforeEach(function(){
    this.test = true;
  })
  
  it(`has a name`, function(){
    let mary = new Person.Person('mary', 28, 'doctor');
    expect(mary.name).toEqual('mary');
    expect(this.test).toBe(true);
  });
});