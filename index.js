//    Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.
const masiv = [1,512,21,241,"Удалить","wasted","Del",122]
numMasiv = masiv.filter(function(i){return i === +i})
let sumMasiv = numMasiv.reduce(function(sum, elem) {
	return sum + elem;
}, 0);
console.log(sumMasiv)

//    Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.

function doMath(x, znak, y) {
    return eval(x + znak.replace('^', '**') + y)
}
let x = prompt("Укажите первое число")
let znak = prompt("Укажите математическое действие")
let y = prompt("Укажите второе число")
alert(x +znak+y+" = "+doMath(x, znak, y))

//Написати функцію заповнення даними користувача двомірного масиву. Довжину основного масиву і внутрішніх масивів задає користувач. Значення всіх елементів всіх масивів задає користувач.

const M = prompt("Укажите количество елементов в масиве"), N = 4;
var arr = [];
for (var i = 0; i < M; i++) {
     arr[i] = [];
    for (let j = 0; j < N; j++){
        
    }
}
 
console.log(arr);


//Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.
