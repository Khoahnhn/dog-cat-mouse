var chalk = require('chalk');

function Dog(name){
	this.tomach =[];
	this.name = name;
}
Dog.prototype.eat = function(cat){
	this.stomach.push(cat)
};
Dog.prototype.sayHi = function(){
	console.log('Hi! im Dog .My name is' + chalk.red(this.name));
};

module.exports = Dog;