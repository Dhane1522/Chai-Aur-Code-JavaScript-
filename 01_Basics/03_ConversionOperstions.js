// ******************* Conversion Of Primitive data types *****************

let score = null

// console.log(typeof score);

let valueInNumber = Number(score)

// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN
// true => 1 ; false => 0

let IsLoggedIn = 33

let booleanIsloggedIn = Boolean(IsLoggedIn)
// console.log(booleanIsloggedIn);
// console.log(typeof booleanIsloggedIn)

// 1 => true; 0 => false; (any positive or negative number is also true.)
// "" => false
// "Roshan" => true
// null => false; undefined =>false

let someNumber = 32

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);
//converting primitive types to string often results in straightforward representation.


//******************** Operations ******************=3

let value = 3
let negvalue = -value
// console.log(negvalue);

// console.log(2+2);//Addition
// console.log(2-2);//Subraction
// console.log(2*2);//Multiplication
// console.log(2**2);//Power
// console.log(2/2);//Division
// console.log(9%5);//Remainder

let str1 ="Hello"
let str2 =" World"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");
//If string is first everything will be treated as strings but if number is at first it will do the calculation then attach the string.

// console.log( (3 + 4) * 5 % 3);

//tricky converion but not applicable in realife scenerio due to lack of readability
// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2


//prefix and postfix 
let elixcr = 1000
let gold =  elixcr++
console.log(elixcr, gold);




