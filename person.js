'use strict';

let name = 'login';
let age = 'age';
let pass;
let person={
    [name]:'john',
    [age]:30,
    [pass]:'dcwe',
    weight:60,
    sex:'male',
	height:170
}

console.log(person);
console.log(person[name]);
console.log(person[age]);

///////////// HW# 008

let money = prompt("Ваш бюджет на месяц?"),
	time = prompt("Введите дату в формате YYYY-MM-DD");
	
let appData = {
	budjet : money,
	timeDate : time,
	expenses : {
	},
	optionalExpenses : {	
	},
	income : [],
	savings : false
};	

//4
var i = 1;
do {	
	var que1 = prompt("Введите обязательную статью расходов в этом месяце"),
		que2 = prompt("Во сколько обойдется?");
	
	i++;
} while (i<=2);
appData.expenses[que1] = que2;

//5
alert("бюджет на 1 день : " + appData.budjet/30);
