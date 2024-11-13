// type guard.

interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number;
}

function introduce(): Developer | Person {
    return { name: 'Tony', age: 33, skill: "Iron Making"}
}

var tony = introduce();

// Person일 수도 있으므로, skill을 찍을 수 없다. 
console.log(tony.skill); 

// => 타입 단언을 사용하여 단계적으로 타입을 줄여나간다.
// => 근데 너무 코드가 길어진다...
if ((tony as Developer).skill) {
    var skill = (tony as Developer).skill;
    console.log(skill);
} else if ((tony as Person).age) {
    var age = (tony as Person).age;
    console.log(age);
}