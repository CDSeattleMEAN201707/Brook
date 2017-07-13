let myNum: number = 5;
let myString: string = "Hello Universe";
let myArr: Array<number> = [1,2,3,4];
let myObj: object = { name:'Bill'};
let anythingVariable: any = "Hey";
anythingVariable = 25;
let arrayOne: Array<boolean> = [true, false, true, true];
let arrayTwo: Array<any> = [1, 'abc', true, 2];
myObj = { x: 5, y: 10 };
// object constructor
class MyNode{
  _priv: number;
  val: number;
  constructor(value) {
      this.val=0
      this.val=value;
  }
  doSomething(){
      this._priv = 10;
  }
}
let myNodeInstnace = new MyNode(1);
console.log(myNodeInstnace.val);
function myFunction() :void{
    console.log("Hello World");
    return;
}
function sendingErrors() :never{
	throw new Error('Error message');
}
