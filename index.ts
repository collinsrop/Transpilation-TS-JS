let nos: number[] = [1,2,3,4,5,6,7,8,9,10]
let evens = nos.filter(n => n%2 ===0);
console.log(evens);



// //ts functions
// function calculateYears(current:number, born: number): number {
// 	return (current-born);
// }
// console.log(calculateYears(2024,2003));

// //ts objects
// let User: {
// 	name: string,
// 	id: number,
// 	retire: (date: Date) => void,
// } = {
// 	name: "John",
// 	 id:2,
// 	 retire: (date: Date) => {
// 		console.log(date);
// 	 }
// 	}
// //union types
// function kgToLbs(weight: number|string){
// //narrow
// if (typeof weight==="number")
// 	return weight * 2.2;
// else
// 	return parseInt(weight) * 2.2;
// }
// console.log(kgToLbs(10));
// console.log(kgToLbs('10kg')); 
