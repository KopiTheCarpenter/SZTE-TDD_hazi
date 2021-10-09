import {Greeter} from './Greeter'

describe('Handle a single input, multiple inputs, and no input.', function () {
  let greeter:Greeter = new Greeter;
  let result:String;
  it('Handle no input', function () {
    result = greeter.greets([]);
    expect(result).toBe('Hello, my friend.');
  });
  
  it('Handle single input', function () {
    result = greeter.greets(['Bob']);
    expect(result).toBe('Hello, Bob.');
  });
  
  it('Handle multiple input', function () {
    result = greeter.greets(['Alice', 'Bob', 'Jerry']);
    expect(result).toBe('Hello, Alice, Bob, and Jerry.');
  });

});