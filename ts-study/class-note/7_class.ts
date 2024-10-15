class Pers1 {
    private name: string;
    public age: number;
    readonly log: string; // final 같은 것

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}