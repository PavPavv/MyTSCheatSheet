// DOWNLOAD TS:
// run npm install -g typescript

// RUN TS:
// tsc fileName.ts

/////////////////////////////////////////////////////////////////////////////////////////
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

// Own type (псевдонимы)
type Login = string;
const login: Login = 'admin';

type ID = string | number;
const id1: ID = 123;
const id2: ID = '123';

type Band = {
  name: string,
  rock: boolean,
}

type Instruments = {
  guitar: boolean,
  drums: boolean,
  viola: boolean,
  bass: boolean,
  piano: boolean,
  organ: boolean,
  ukulele: boolean,
}

type MusicBand = Band & Instruments; // пересечение

// Null
// Undefined
type SomeType = string | null | undefined; // объединение
const some1: SomeType = null;



/////////////////////////////////////////////////////////////
// INTERFACES
/*
The term interface is often used to define an abstract type 
that contains no data or code, but defines behaviors as method signatures.
*/
interface Rect {
  readonly id: string,
  color?: string,
  size: {
    width: number,
    height: number,
  }
}

const rect1: Rect = {
  id: '123',
  color: '#ccccccc',
  size: {
    width: 20,
    height: 20,
  },
};

const rect2 = {} as Rect;
const rect3 = <Rect>{}; // old syntax

// Inherit interfaces
interface RectWithArea extends Rect {
  getArea: () => number,
}

const rect5: RectWithArea = {
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

interface Clock {
  time: Date,
  setTime(date: Date): void,
}

class Clock implements Clock {
  time: Date = new Date();
  setTime(date: Date): void {
    this.time = date;
  }
}

// 
interface Styles {
  [key: string]: string
}

const css: Styles = {
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
// GENERIC TYPES

const cars: string[] = ['Citroen', 'Peugeot'];
const cars2: Array<string> = ['Toyota', 'Suzuki']; // generic

// const promise: Promise<string> = new Promise(resolve => {
//   setTimeout(() => {
//     resolve('Promise resolved')
//   }, 3000)
// });

const promise = new Promise<string>(resolve => {
  setTimeout(() => {
    resolve('Promise resolved')
  }, 3000)
});

promise.then(data => {
  console.log(data.trim())
});

function mergeObjects<T extends object, R extends object>(a: T, b: R) {
  return (<any>Object).assign({}, a, b);
}

const merged = mergeObjects({ name: 'Dave' }, { band: 'Nirvana' });
console.log(merged)

interface ILength {
  length: number,
}

function withCount<T extends ILength>(value: T): { value: T, count: string } {
  return {
    value,
    count: `${value.length} chars in this object`
  }
}

console.log(withCount('Hi, may I? )'))

function getObjectValue<T extends object, R extends keyof T>(obj: T, key: R) {
  return obj[key];
}

const person = {
  name: 'Dave',
  band: 'Foo Fighters',
}
console.log(getObjectValue(person, 'name'));
console.log(getObjectValue(person, 'band'));
// console.log(getObjectValue(person, 'age')); // error

// class Collecton<T extends number | string | boolean> {
//   constructor(private _items: T[] = []) { }

//   add(item: T) {
//     this._items.push(item);
//   }

//   remove(item: T) {
//     this._items = this._items.filter(i => i !== item);
//   }

//   get items(): T[] {
//     return this._items;
//   }
// }

// const stringsD = new Collecton<string>(['Dave', 'Grohl']);
// stringsD.add('TCV');
// stringsD.add('Foo Fighters');
// stringsD.remove('TCV');
// console.log(stringsD.items);



interface AnotherCar {
  model: string,
  year: number,
}

const createAndValidateCar = (model: string, year: number): AnotherCar => {
  const car: Partial<AnotherCar> = {};
  if (model.length > 3) {
    car.model = model;
  }
  if (year > 2000) {
    car.year = year;
  }
  return car as AnotherCar;
}

const someFastCars: Readonly<Array<string>> = ['Toyota', 'Citroen'];
//someFastCars.shift();

const peugeot: Readonly<AnotherCar> = {
  model: '307',
  year: 2007,
};

//peugeot.year = 2016;

///////////////////////////////////////////////////////////////////////
// DECORATORS


// function Log(constructor: Function) {

// }

// function Log2(target: any, propName: string | Symbol) {

// }

// function Log3(target: any, propName: string | Symbol, descriptor: PropertyDescriptor) {

// }


// @Log
// class TestComponent {
//   @Log2
//   name: string

//   @Log3
//   get componentName() {
//     return this.name;
//   }

//   constructor(name: string) {
//     this.name = name;
//   }

//   @Log3
//   logName(): void {
//     console.log(this.name);
//   }
// }

// interface ComponentAngularDecorator {
//   selector: string
//   template: string
// }

// function ComponentAngular(config: ComponentAngularDecorator) {
//   return function <T extends { new(...args: any[]): object }>(Constructor: T) {
//     return class extends Constructor {
//       constructor(...args: any[]) {
//         super(...args);
//         const el = document.querySelector(config.selector)!;
//         el.innerHTML = config.template;
//       }
//     }
//   }
// }

// function Bind(_: any, _2: any, descriptor: PropertyDescriptor): PropertyDescriptor {
//   const orig = descriptor.value;
//   return {
//     configurable: true,
//     enumerable: false,
//     get() {
//       return orig.bind(this);
//     }
//   }
// }

// @ComponentAngular({
//   selector: '#test',
//   template: `
//     <div class="card">
//       <div class="card-content">
//         <span class="card-title">Card Component</span>
//       </div>
//     </div>
//   `,
// })

// class TestComponent1 {
//   constructor(public name: string) {
//     this.name = name;
//   }

//   @Bind
//   logName(): void {
//     console.log(this.name)
//   }
// }

// const cardd = new TestComponent1('Test Card');

// type ValidatorType = 'required' | 'email'

// interface ValidatorConfig {
//   [prop: string]: {
//     [validateProp: string]: ValidatorType
//   }
// }

// const validators: ValidatorConfig = {};

// function Required(target: any, propName: string) {
//   validators[target.constructor.name] = {
//     ...validators[target.constructor.name],
//     [propName]: 'required'
//   }
// }

// function validate(obj: any): boolean {
//   const objConfig = validators[obj.constructor.name];
//   if (!objConfig) {
//     return true;
//   }
//   const isValid = true;
//   Object.keys(objConfig).forEach(key => {
//     if (objConfig[key] === 'required') {
//       isValid = isValid && !!obj[key];
//     }
//   })
//   return isValid;
// }

// class Form {
//   @Required
//   public email: string | void

//   constructor(email?: string) {
//     this.email = email;
//   }
// }

// const form = new Form('test@test.test');
// if (validate(form)) {
//   console.log('valid', form);
// } else {
//   console.log('validation error')
// }


// NAMESPACES

/// <reference path="namespaces.ts" />

namespace Form {
  class MyForm {
    private type: FormType = 'inline'
    private state: FormState = 'active'

    constructor(public email: sting) {

    }

    getInfo(): FormInfo {
      return {
        type: this.type,
        state: this.state,
      }
    }
  }
}



const form = new MyForm('test@test.test');