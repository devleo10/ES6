const player = {
    name: 'Leo Messi',
    club:'Inter Miami',
    address: {
        city: 'Miami'

    }
};

const {name,club,address:{ city } }=player;
console.log(`${name} stays in ${city }`);

// Object destructuring in JavaScript provides a succinct way to extract multiple properties from objects 
// and assign them to variables. Instead of accessing each property individually, 
// you can use destructuring syntax to unpack properties into distinct variables. 
// This not only makes the code more concise but also enhances its readability and maintainability. It's particularly useful when dealing 
// with functions that return objects or when working with complex data structures, as it allows you to focus on the specific properties you 
// need without cluttering your code with unnecessary syntax.