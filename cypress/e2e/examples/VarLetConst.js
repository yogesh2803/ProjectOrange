
// Example with var
function varExample() {
    if (true) {
        var x = 10;
    }
    console.log(x); // Outputs 10, because x is function-scoped
}

// Example with let
function letExample() {
    if (true) {
        let y = 20;
    }
    console.log(y); // Throws a ReferenceError, because y is block-scoped
}

// Example with const
const PI = 3.14159;
PI = 3.14; // This would result in a TypeError, as const variables cannot be re-assigned

const person = {
    name: 'John',
    age: 30
};

person.age = 31; // This is allowed because it modifies a property of the object, not the variable itself
