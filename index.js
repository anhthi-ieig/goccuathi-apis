class Hello {
  static age = 5;

  saySomething = () => {
    console.log('Hi! Nice to meet you');
  }
}

const hello = new Hello();
hello.saySomething();
