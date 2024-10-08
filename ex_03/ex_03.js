function map(elements, modifier) {
    let result = [];
    for (let i = 0; i < elements.length; i++) { result.push(modifier(elements[i])); }
    return result;
}

function isEven(number) { return number % 2 === 0 }

console.log(map([5, 8, 10], isEven))
