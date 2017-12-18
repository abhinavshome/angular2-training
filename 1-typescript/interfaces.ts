interface Student {
    name: string;
    age: number;
    introduce: Function;
}

class Human implements Student {
    name: string;
    age: number;
    introduce() {return 'Hello'}
}

let david : Student = {
    name: 'David D',
    age: 21,
    introduce: () => 'Hello'
}