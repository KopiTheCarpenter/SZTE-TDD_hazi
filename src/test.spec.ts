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

describe('Handle shouting (when the name is full uppercase).', function () {
  let greeter:Greeter = new Greeter;
  let result:String;
  it('Only shouting input: Results a shouting greeting.', function () {
    result = greeter.greets(['BARRY']);
    expect(result).toBe('HELLO BARRY!');
  });
  
  it('Mixed input: Separates the response into two greetings.', function () {
    result = greeter.greets(['JAY', 'Maya', 'Alice', 'BOB', 'Charlotte']);
    expect(result).toBe('Hello, Maya, Alice, and Charlotte. AND HELLO JAY, AND BOB!');
  });
  it('Mixed input: Separates the response into two greetings. More shouts.', function () {
    result = greeter.greets(['JAY', 'Maya', 'Alice', 'BOB', 'Charlotte','BARRY']);
    expect(result).toBe('Hello, Maya, Alice, and Charlotte. AND HELLO JAY, BOB, AND BARRY!');
  });
});