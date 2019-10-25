
function Universe() {
    if (typeof Universe.instance === "object") {
        return Universe.instance;
    }
    // console.log(typeof Universe.instance === "object");
    this.start = "znlStart";
    this.end = "znlEnd";
    Universe.instance = this;
    console.log(Universe.instance);
    return this;
}
var uni = new Universe();
console.log(Universe());
var uni1 = new Universe();
uni1.b = "zksfasf";
console.log(Universe());
function Animate(cat) {
    this.cat = cat
}
var obj = {};
obj.__proto__ = Animate.prototype;

Animate.call(obj, "cat")
function Universe() {
    var instance = this;
    this.start_time = 0;
    this.bang = "Big";
    Universe = function () {
        return instance;
    }
}
Universe.prototype.a = "znl";
Universe.prototype.b = "znm";
var uni1 = new Universe();
console.log(uni.a, uni1.a);
console.log(uni.b, uni1.b);
function Animate() {
    this.type = "动物";

}
function Cat() {
    this.name = "猫";
    this.color = "黄色";
}
Cat.prototype = new Animate();




// 替换了prototype对象  必须要将属性指回原来的构造函数
function Animate() {
}
Animate.prototype.speical = "动物";
function Cat(name, color) {
    this.name = name;
    this.color = color;
}
function extend(Child, Parent) {
    var f = function () { };
    f.prototype = Parent.prototype;
    Child.prototype = new f();
    Child.prototype.constructor = Child;

}
extend(Cat, Animate);
var cat1 = new Cat("猫", "红色");
console.log(cat1.speical);
function Universe() {
}
Universe.prototype.everything = true;
var uni = new Universe();
Universe.prototype.nothing = true;
var uni1 = new Universe();

/*
*实现构造函数创建的对象实例  都是相等的  无论属性什么时候偶被定义都会添加到是所有的实例中 
*问题的关键是  核心思想 ： 构建一个和当前实例一模一样的实例返回
*/

let global;
function Universe() {
    var instance;
    //重写构造函数是为了将擦创建一个空构造函数  以便于后面对实例的初始化操作  重写构造函数不会对this 产生影响
    this.c = "afafaf";
    Universe = function Universe() {
        return instance;
    }
    global = this;
    console.log(global);
    Universe.prototype = this;
    instance = new Universe();
    instance.constructor = Universe;
    instance.a = "znl";
    instance.b = "hhs";
    return instance;
}
var uni = new Universe();
var Universe;
(function () {
    var instance;
    Universe = function Universe() {
        console.log(instance);
        if (instance) {
            return instance;
        }
        instance = this;
        this.a = "znl";
        this.b = "hhs";
    }
})()
function Stack() {
    this.dataStore = [];
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.length = length;
    this.clear = clear;
}
function push(element) {
    this.dataStore[this.top++] = element;
}
function pop() {
    return this.dataStore[--this.top];
}
function peek() {
    return this.dataStore[this.top - 1];
}
function clear() {
    this.top = 0;
}
function length() {
    return this.top;
}

var p = new Stack();
p.push("David");
p.push("Raymond");
p.push("Bryan");
console.log(p.peek());
var popped = p.pop();

var longestPalindrome = function (s) {
    let palindromes = [];

    if (s.length <= 1) {
        return s;
    }
    for (var i = 0; i < s.length; i += 1) {
        j = 0;
        k = 0;
        while (s[i + j] === s[i - j] && s[i + j] && s[i - j]) {
            j++;
        };
        palindromes.push(s.slice(i - (j - 1), i + j)) //even palindromes
        j = 0;

        while (s[(i + 1) + k] === s[i - k] && s[(i + 1) + k] && s[i - k]) {
            k++;
        }
        palindromes.push(s.slice(i - (k - 1), (i + 1) + k)) //odd palindromes
        k = 0;
    }
    return palindromes.sort((a, b) => {
        return b.length - a.length
    })[0];

};
function CarMaker() { }
CarMaker.prototype.drive = function () {
    return "Vroom, I have " + this.doors + "doors";
}
//CarMaker构造函数的静态属性 都可以作为构造函数  
CarMaker.Compact = function () {
    this.doors = 4;
}
CarMaker.Convertible = function () {
    this.doors = 2;
}
CarMaker.SUV = function () {
    this.doors = 24;
}
CarMaker.factory = function (type) {
    var constr = type;
    newcar;
    if (typeof CarMaker[constr] !== "function") {
        throw {
            name: "Error",
            message: constr + "doesn't exist"
        }
    }
    if (typeof CarMaker[constr].prototype.drive !== "function") {
        CarMaker[constr].prototype = new CarMaker();
    }
    newcar = new CarMaker[constr]();
    return newcar;
}


