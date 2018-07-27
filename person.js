let name = '';

module.exports = {
    setName: (newName) => {
        name = newName;
    },
    sayHello: () => {
        console.log(`Hello, I'm ${name}`);
    }
};