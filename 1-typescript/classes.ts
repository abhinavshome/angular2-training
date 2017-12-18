class Person {
    // private name : string;
    // private age : number;

    constructor(private name: string, private age: number){
        // this.name = n;
        // this.age = a;
    }

    getName() : string{
        return this.name;
    }

    introduce() {
        console.log('Hello I am ' + this.name + ' and I am ' + this.age + ' years old');
    }
}

let sam = new Person('Sam Dzouza', 21);
sam.introduce();