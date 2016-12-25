class Example {
  constructor() {
    console.log('It works;');// eslint-disable-line no-console
    this.a = 'hello';
  }
  hello() {
    console.log(this.a);// eslint-disable-line no-console
  }
}
export default Example;
