// DOWNLOAD TS:
// run npm install -g typescript

// RUN TS:
// tsc fileName.ts

/////////////////////////////////////////////////////////////
// TYPES (Boolean, Number, String, Null, Undefined,  Array, Tuple, Any, Never, own types)
// Boolean
const isSmth: boolean = true;

// Number
const num: number = 42;
const numF: number = 42.3;
const numE: number = 3e10;

// String
const str: string = 'Something';

// Array
const numArr: number[] = [1, 2, 3, 5, 8];
const numArr1: Array<number> = [1, 2, 3, 5, 8];

// Tuple
const contactTup: [string, number] = ['James', 12345];

// Any
let anyT: any = 'test';
anyT = 42;

//
const sayMyName = (name: string): void => {
  console.log(name)
}

//sayMyName('Paul');

// Never
const throwError = (message: string): never => {
  throw new Error(message);
}

// Own type
type Login = string;
const login: Login = 'admin';

type ID = string | number;
const id1: ID = 123;
const id2: ID = '123';

// Null
// Undefined
type SomeType = string | null | undefined;
const some1: SomeType = null;


/////////////////////////////////////////////////////////////
// INTERFACES
interface IRect {
  readonly id: string,
  color?: string,
  size: {
    width: number,
    height: number,
  }
}

const rect1: IRect = {
  id: '123',
  color: '#ccccccc',
  size: {
    width: 20,
    height: 20,
  },
};

const rect2 = {} as IRect;
const rect3 = <IRect>{}; // old syntax

// Inherit interfaces
interface IRectWithArea extends IRect {
  getArea: () => number,
}

const rect5: IRectWithArea = {
  id: '1234',
  color: '#ffffff',
  size: {
    width: 100,
    height: 80,
  },
  getArea(): number {
    return this.size.width * this.size.height;
  }
}

interface IClock {
  time: Date,
  setTime(date: Date): void,
}

class Clock implements IClock {
  time: Date = new Date();
  setTime(date: Date): void {
    this.time = date;
  }
}

// 
interface IStyles {
  [key: string]: string
}

const css: IStyles = {
  border: '1px solid #000000',
  marginTop: '20px',
  borderRadius: '4px',
}

//////////////////////////////////////////////////
// ENUMS
enum Membership {
  Simple,
  Standard,
  Premium,
}

enum SocialMedia {
  VK = 'VK',
  FACEBOOK = 'FACEBOOK',
  INSTAGRAM = 'INSTAGRAM',
}

//////////////////////////////////////////////////
// FUNCTIONS
const add = (a: number, b: number): number => {
  return a + b;
};

const toUC = (str: string): string => {
  return str.trim().toLocaleUpperCase();
}

// Перегрузка сигнатур функций
interface IPosition {
  x: number | undefined,
  y: number | undefined,
}

interface IPositionWithDefault extends IPosition {
  default: string,
}

function position(): IPosition
function position(a: number): IPositionWithDefault
function position(a: number, b: number): IPosition

function position(a?: number, b?: number) {
  if (!a && !b) {
    return {
      x: undefined,
      y: undefined,
    };
  }

  if (a && !b) {
    return {
      x: a,
      y: undefined,
      default: a.toString(),
    }
  }

  return {
    x: a,
    y: b,
  }
}

///////////////////////////////////////////////
// CLASSES
class TypeScript {
  version: string

  constructor(version: string) {
    this.version = version;
  }

  info(name: string) {
    return `[${name}] TS v is ${this.version}`;
  }
}


// class Car {
//   readonly model: string
//   readonly wheels: number = 4

//   constructor(theModel: string) {
//     this.model = theModel;
//   }
// }

class Car {
  readonly wheels: number = 4
  constructor(readonly model: string) { }
}

// 3 types of modifiers: protected, private and public
class Animal {
  protected voice: string = '';
  public color: string = 'black';

  private go() {
    console.log('go')
  }
}

class Cat extends Animal {
  public setVoice(voice: string) {
    this.voice = voice;
  }
}

const cat = new Cat();

// Abstract classes
abstract class Component {
  abstract render(): void
  abstract info(): string
}

class AppComponent extends Component {
  render(): void {
    console.log('Component on render')
  }

  info(): string {
    return `This is info`;
  }
}

//////////////////////////////////////////////////
// GUARDS
const smth = (x: string | number) => {
  if (typeof x === 'number') {
    return x.toFixed(2);
  }
  return x.trim();
}


class MyResponse {
  header = 'response header'
  result = 'response result'
}

class MyError {
  header = 'error header'
  message = 'error message'
}

const handleRE = (res: MyResponse | MyError) => {
  if (res instanceof MyResponse) {
    return {
      info: res.header + res.result,
    }
  } else {
    return {
      info: res.header + res.message,
    }
  }
}


type AlertType = 'success' | 'danger' | 'warning'

const setAlertType = (type: AlertType) => {

}

//setAlertType('success');
//setAlertType('def'); - error 'cuz setAlertType has guarded params

////////////////////////////////////////////////////////////////
// GENERIC TYPES
type TupArr = string | number;
const arrayOfNumbers: Array<number> = [1, 2, 3, 4, 5];
const arrayOfStrs: Array<string> = ['Hello', 'you'];
const arrayOfTup: Array<TupArr> = ['Hello', 2];

function reverse<T>(arr: T[]): T[] {
  return arr.reverse();
}

reverse(arrayOfNumbers);
reverse(arrayOfStrs);
reverse(arrayOfTup);

///////////////////////////////////////////////////////////////
// ADDITIONAL OPERATORS
// (keyof, Exclude)

interface Person {
  name: string,
  age: number,
}
type PersonKeys = keyof Person // 'name | 'age'

// let key: PersonKeys = 'name';
// let key1: PersonKeys = 'country'; // error

type User = {
  _id: number
  name: string
  email: string
  createdAt: DateConstructor
}

type UserKeysNoMeta = Exclude<keyof User, '_id' | 'createdAt'> // 'name | 'email'
type UserKeysNoMeta1 = Pick<User, 'name' | 'email'> // 'name | 'email'


// const u1: UserKeysNoMeta = 'name';
// const u2: UserKeysNoMeta = 'createdAt'; // error
///////////////////////////////////////////////////////////////////

