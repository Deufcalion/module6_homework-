/* Написать функцию, которая принимает число как аргумент и возвращает функцию, 
которая также принимает число как аргумент и возвращает сумму этих двух чисел. 
Выведите в консоль результат.
 */

function majorFunc(a) {
    return function(b) {
        return a+b
    }
  };
  
  const sumFunction = majorFunc(5);
  
  const sum = sumFunction(10)
  
  console.log(sum); 