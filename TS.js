"use strict";
// DOWNLOAD TS:
// run npm install -g typescript
// RUN TS:
// tsc fileName.ts
/////////////////////////////////////////////////////////////////////////////////////////
// TYPES (Boolean, Number, String, Null, Undefined,  Array, Tuple, Any, Never, own types)
// Boolean
const isSmth = true;
// Number
const num = 42;
const numF = 42.3;
const numE = 3e10;
// String
const str = 'Something';
// Array
const numArr = [1, 2, 3, 5, 8];
const numArr1 = [1, 2, 3, 5, 8];
// Tuple
const contactTup = ['James', 12345];
// Any
let anyT = 'test';
anyT = 42;
//
const sayMyName = (name) => {
    console.log(name);
};
//sayMyName('Paul');
// Never
const throwError = (message) => {
    throw new Error(message);
};
const login = 'admin';
const id1 = 123;
const id2 = '123';
const some1 = null;
const rect1 = {
    id: '123',
    color: '#ccccccc',
    size: {
        width: 20,
        height: 20,
    },
};
const rect2 = {};
const rect3 = {}; // old syntax
const rect5 = {
    id: '1234',
    color: '#ffffff',
    size: {
        width: 100,
        height: 80,
    },
    getArea() {
        return this.size.width * this.size.height;
    }
};
class Clock {
    constructor() {
        this.time = new Date();
    }
    setTime(date) {
        this.time = date;
    }
}
const css = {
    border: '1px solid #000000',
    marginTop: '20px',
    borderRadius: '4px',
};
//////////////////////////////////////////////////
// ENUMS
var Membership;
(function (Membership) {
    Membership[Membership["Simple"] = 0] = "Simple";
    Membership[Membership["Standard"] = 1] = "Standard";
    Membership[Membership["Premium"] = 2] = "Premium";
})(Membership || (Membership = {}));
var SocialMedia;
(function (SocialMedia) {
    SocialMedia["VK"] = "VK";
    SocialMedia["FACEBOOK"] = "FACEBOOK";
    SocialMedia["INSTAGRAM"] = "INSTAGRAM";
})(SocialMedia || (SocialMedia = {}));
//////////////////////////////////////////////////
// FUNCTIONS
const add = (a, b) => {
    return a + b;
};
const toUC = (str) => {
    return str.trim().toLocaleUpperCase();
};
function position(a, b) {
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
        };
    }
    return {
        x: a,
        y: b,
    };
}
///////////////////////////////////////////////
// CLASSES
class TypeScript {
    constructor(version) {
        this.version = version;
    }
    info(name) {
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
    constructor(model) {
        this.model = model;
        this.wheels = 4;
    }
}
// 3 types of modifiers: protected, private and public
class Animal {
    constructor() {
        this.voice = '';
        this.color = 'black';
    }
    go() {
        console.log('go');
    }
}
class Cat extends Animal {
    setVoice(voice) {
        this.voice = voice;
    }
}
const cat = new Cat();
// Abstract classes
class Component {
}
class AppComponent extends Component {
    render() {
        console.log('Component on render');
    }
    info() {
        return `This is info`;
    }
}
//////////////////////////////////////////////////
// GUARDS
const smth = (x) => {
    if (typeof x === 'number') {
        return x.toFixed(2);
    }
    return x.trim();
};
class MyResponse {
    constructor() {
        this.header = 'response header';
        this.result = 'response result';
    }
}
class MyError {
    constructor() {
        this.header = 'error header';
        this.message = 'error message';
    }
}
const handleRE = (res) => {
    if (res instanceof MyResponse) {
        return {
            info: res.header + res.result,
        };
    }
    else {
        return {
            info: res.header + res.message,
        };
    }
};
const setAlertType = (type) => {
};
const arrayOfNumbers = [1, 2, 3, 4, 5];
const arrayOfStrs = ['Hello', 'you'];
const arrayOfTup = ['Hello', 2];
function reverse(arr) {
    return arr.reverse();
}
reverse(arrayOfNumbers);
reverse(arrayOfStrs);
reverse(arrayOfTup);
// const u1: UserKeysNoMeta = 'name';
// const u2: UserKeysNoMeta = 'createdAt'; // error
///////////////////////////////////////////////////////////////////
// GENERIC TYPES
const cars = ['Citroen', 'Peugeot'];
const cars2 = ['Toyota', 'Suzuki']; // generic
// const promise: Promise<string> = new Promise(resolve => {
//   setTimeout(() => {
//     resolve('Promise resolved')
//   }, 3000)
// });
const promise = new Promise(resolve => {
    setTimeout(() => {
        resolve('Promise resolved');
    }, 3000);
});
promise.then(data => {
    console.log(data.trim());
});
function mergeObjects(a, b) {
    return Object.assign({}, a, b);
}
const merged = mergeObjects({ name: 'Dave' }, { band: 'Nirvana' });
console.log(merged);
function withCount(value) {
    return {
        value,
        count: `${value.length} chars in this object`
    };
}
console.log(withCount('Hi, may I? )'));
function getObjectValue(obj, key) {
    return obj[key];
}
const person = {
    name: 'Dave',
    band: 'Foo Fighters',
};
console.log(getObjectValue(person, 'name'));
console.log(getObjectValue(person, 'band'));
const createAndValidateCar = (model, year) => {
    const car = {};
    if (model.length > 3) {
        car.model = model;
    }
    if (year > 2000) {
        car.year = year;
    }
    return car;
};
const someFastCars = ['Toyota', 'Citroen'];
//someFastCars.shift();
const peugeot = {
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
var Form;
(function (Form) {
    class MyForm {
        constructor(email) {
            this.email = email;
            this.type = 'inline';
            this.state = 'active';
        }
        getInfo() {
            return {
                type: this.type,
                state: this.state,
            };
        }
    }
})(Form || (Form = {}));
const form = new MyForm('test@test.test');
