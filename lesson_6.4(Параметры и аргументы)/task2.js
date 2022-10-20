/* Написать функцию, которая принимает на входе любое число (но не больше 1 000), определяет, является ли оно простым, и выводит простое число или нет. 
Если введено больше 1 000, то выводится сообщение, что данные неверны. Обратите внимание на числа 0 и 1.

Здесь вам пригодятся знания из предыдущего модуля — циклы и условные операторы.
 */

function isPrimeNum (num) {
	let isPrime, result;
	isPrime = true;

	if (num > 1 && num <= 1000) {
		for (let i = 2; i < num; i++) {
			if(num % i === 0) {
				isPrime = false;
			}
		}
		result = isPrime ? `Число ${num} - простое число` : `Число ${num} - не является простым`;
	} else if (num > 1000){
		result = 'Данные неверны';
	}
	return result;
}

console.log(isPrimeNum(2))
console.log(isPrimeNum(9))
console.log(isPrimeNum(1005))
console.log(isPrimeNum(0))
console.log(isPrimeNum(1))