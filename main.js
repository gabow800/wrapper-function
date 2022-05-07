
const add = (a,b) => {
    return a + b;
}

const wrapper = (fn) => {
    return function () {
        const start = new Date();
        const result = fn.apply(this, arguments);
        const end = new Date();
        const duration = start.getTime() - end.getTime();
        console.log(`Function took ${duration} ms to execute`);
        return result;
    }
}

const addWrapped = wrapper(add);
const result = addWrapped(8,2);
console.log('=== RESULT ===');
console.log(result);