// Scope


var b = "Can access?";

function bar() {
    b = "hello"
}

console.log(b);
bar();
console.log(b);