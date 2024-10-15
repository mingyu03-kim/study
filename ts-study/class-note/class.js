// ES2015 (ES6) 최신문법.
class Person {
    // 클래스 로직

    // 초기화 생성자
    constructor(name, age) {
        console.log('생성됨');
        this.name = name;
        this.age = age;
    }
}

var s = new Person('wow', 30);
console.log(s);



var user = { name: 'capt', age: 100};
var admin = {};
admin.__proto__ = user;
// => admin에 user가 들어간다.

console.log(admin.name);
console.log(admin.age);