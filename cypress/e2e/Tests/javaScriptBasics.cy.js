console.log("Hello World")

let a = 4
console.log(a)  // data typini ogrenmek icin
console.log(typeof(a))

//var, let, const  variable names

let c = " hello"
console.log(typeof(c))

let required = true
console.log(typeof(required))

// null & undefined 
// we can not redeclare the let variable but vith var yes
console.log(!required) 

//const  we can not re assing the const variables

//Array creation
var marks =Array(6)
let mark = new Array(20,30,40)
var market =[2,3,4,5]

mark.push(56) //arraya value ekle
mark.includes(65)//65 arrayin icinde var mi yokmu 
mark.slice(2,5) //index 2 ile index 5 arasini alir substring ggibi

let sumOfNumbers = (c,d) => c+d  //burada method  c ,d variable ve return yap tooplami ve method adi ile
sumOfNumbers(3,4)

