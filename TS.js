// DOWNLOAD TS:
// run npm install -g typescript
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// RUN TS:
// tsc fileName.ts
/////////////////////////////////////////////////////////////
// TYPES (Boolean, Number, String, Null, Undefined,  Array, Tuple, Any, Never, own types)
// Boolean
var isSmth = true;
// Number
var num = 42;
var numF = 42.3;
var numE = 3e10;
// String
var str = 'Something';
// Array
var numArr = [1, 2, 3, 5, 8];
var numArr1 = [1, 2, 3, 5, 8];
// Tuple
var contactTup = ['James', 12345];
// Any
var anyT = 'test';
anyT = 42;
//
var sayMyName = function (name) {
    console.log(name);
};
//sayMyName('Paul');
// Never
var throwError = function (message) {
    throw new Error(message);
};
var login = 'admin';
var id1 = 123;
var id2 = '123';
var some1 = null;
var rect1 = {
    id: '123',
    color: '#ccccccc',
    size: {
        width: 20,
        height: 20
    }
};
var rect2 = {};
var rect3 = {}; // old syntax
var rect5 = {
    id: '1234',
    color: '#ffffff',
    size: {
        width: 100,
        height: 80
    },
    getArea: function () {
        return this.size.width * this.size.height;
    }
};
var Clock = /** @class */ (function () {
    function Clock() {
        this.time = new Date();
    }
    Clock.prototype.setTime = function (date) {
        this.time = date;
    };
    return Clock;
}());
var css = {
    border: '1px solid #000000',
    marginTop: '20px',
    borderRadius: '4px'
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
var add = function (a, b) {
    return a + b;
};
var toUC = function (str) {
    return str.trim().toLocaleUpperCase();
};
function position(a, b) {
    if (!a && !b) {
        return {
            x: undefined,
            y: undefined
        };
    }
    if (a && !b) {
        return {
            x: a,
            y: undefined,
            "default": a.toString()
        };
    }
    return {
        x: a,
        y: b
    };
}
///////////////////////////////////////////////
// CLASSES
var TypeScript = /** @class */ (function () {
    function TypeScript(version) {
        this.version = version;
    }
    TypeScript.prototype.info = function (name) {
        return "[" + name + "] TS v is " + this.version;
    };
    return TypeScript;
}());
// class Car {
//   readonly model: string
//   readonly wheels: number = 4
//   constructor(theModel: string) {
//     this.model = theModel;
//   }
// }
var Car = /** @class */ (function () {
    function Car(model) {
        this.model = model;
        this.wheels = 4;
    }
    return Car;
}());
// 3 types of modifiers: protected, private and public
var Animal = /** @class */ (function () {
    function Animal() {
        this.voice = '';
        this.color = 'black';
    }
    Animal.prototype.go = function () {
        console.log('go');
    };
    return Animal;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.setVoice = function (voice) {
        this.voice = voice;
    };
    return Cat;
}(Animal));
var cat = new Cat();
// Abstract classes
var Component = /** @class */ (function () {
    function Component() {
    }
    return Component;
}());
var AppComponent = /** @class */ (function (_super) {
    __extends(AppComponent, _super);
    function AppComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppComponent.prototype.render = function () {
        console.log('Component on render');
    };
    AppComponent.prototype.info = function () {
        return "This is info";
    };
    return AppComponent;
}(Component));
//////////////////////////////////////////////////
// GUARDS
var smth = function (x) {
    if (typeof x === 'number') {
        return x.toFixed(2);
    }
    return x.trim();
};
var MyResponse = /** @class */ (function () {
    function MyResponse() {
        this.header = 'response header';
        this.result = 'response result';
    }
    return MyResponse;
}());
var MyError = /** @class */ (function () {
    function MyError() {
        this.header = 'error header';
        this.message = 'error message';
    }
    return MyError;
}());
var handleRE = function (res) {
    if (res instanceof MyResponse) {
        return {
            info: res.header + res.result
        };
    }
    else {
        return {
            info: res.header + res.message
        };
    }
};
var setAlertType = function (type) {
};
var arrayOfNumbers = [1, 2, 3, 4, 5];
var arrayOfStrs = ['Hello', 'you'];
var arrayOfTup = ['Hello', 2];
function reverse(arr) {
    return arr.reverse();
}
reverse(arrayOfNumbers);
reverse(arrayOfStrs);
reverse(arrayOfTup);
// const u1: UserKeysNoMeta = 'name';
// const u2: UserKeysNoMeta = 'createdAt'; // error
