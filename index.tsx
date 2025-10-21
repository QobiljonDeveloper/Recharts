function myBind(fn, thisArg, ...args) {
  return function (...moreArgs) {
    return fn.apply(thisArg, [...args, ...moreArgs]);
  };
}

function greet(greeting, name) {
  console.log(`${greeting}, ${name}! Men ${this.title}`);
}

const person = { title: "Qobiljon" };

const boundGreet = myBind(greet, person, "Salom");
boundGreet("Aziz");
