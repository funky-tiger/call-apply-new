
function myNew(){
    /** 1 我们都new第一个参数为构造函数
     * shift:把数组的第一个元素从其中删除，并返回第一个元素的值
     * 此时Constructor就是构造函数
     */
    let Constructor = Array.prototype.shift.call(arguments);
    /** 2 将要返回的实例 */
    let obj = {};
    /** 3 实例obj和构造函数Constructor指向同一个原型对象 */
    obj.__proto__ = Constructor.prototype;
    /** 4 拿到实例执行的结果 观察结果是不是一个引用类型
     * 改变Constructor的this指向为将要返回的实例obj 并传递参数 
     * 这里一定要用apply 不要用call 因为apply传递的是一个参数数组
    */
    let r = Constructor.apply(obj,arguments);
    return r instanceof Constructor? r : obj;
}

function Animal(type){
    this.type = type;
}

Animal.prototype.eat = function(){
    console.log('eat-meat');
}

let tiger = new Animal('tiger');
let tiger1 = new myNew(Animal,'tiger');

console.log(tiger.type); // 打印 tiger
console.log(tiger.eat()); // 打印 eat-meat

console.log(tiger1.type); // 打印 tiger
console.log(tiger1.eat()); // 打印 eat-meat