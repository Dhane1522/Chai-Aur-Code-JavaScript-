/************************Comparison of same data types *********************/

// console.log(2 > 1);//  2 greater than 1?
// console.log(2 < 1);//  2 less than 1?
// console.log(2 == 1);// 2 equals to 1?
// console.log(2 >= 1);// 2 greater than equals to 1?
// console.log(2 != 1);// 2 is not equals to 1?



/************************Comparison of different data types *********************/

// console.log("2" > 1);
// console.log("02" > 1);

// USing different data types provides us unpredictable results to we should be aware about this factor while using it.

// console.log(null > 0);//  false
// console.log(null == 0);// false
// console.log(null >= 0);// true

/*The reason is that an equality check == and comaparison > < >= <= works differently.
Comparision converts null to a number, treating it as 0.
That's why 3rd null is true and 1st null is false.*/

console.log(undefined > 0);//  false
console.log(undefined == 0);// false
console.log(undefined >= 0);// false

/*Prefer strict equality (===) over loose equality (==) as it compares both value and type.
Strict equality avoids type coercion, making comparisons more explicit and less error-prone.*/

console.log("2"=== 2);









