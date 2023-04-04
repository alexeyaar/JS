//      HW 1
let firstName = "John"
let lastName = "Adams"
console.log(firstName, lastName)
let box 
box = firstName 
console.log(box)
firstName = lastName 
lastName = box 
console.log(firstName,lastName)
firstName = "Anna"
lastName = "Karenina"
box = firstName
firstName = lastName
lastName = box
console.log(firstName,lastName)

let a
let c = 9
let str = "Hi 5!"
let b = true
let y = 9 + '1'
let x = 'a'/6
console.log(typeof(a))
console.log(a,c,str,b,y,x)
console.log(typeof(c))
console.log(typeof(str))
console.log(typeof(b))
console.log(typeof(y))
console.log(typeof(x))
        
let name = "Alexey, "
let tall = 1.69
let weight = 70
let BMI = weight /(tall ** 2)
console.log(BMI)
if (BMI > 25 ){
    console.log(`${name}Ты толстяк , пора худеть`)
} else 
console.log(`${name}Пойди покушай`)

///////////////////////////////////////

let a = 12
let b = 16 
console.log(`A${a}, B${b}`)
if (a = 12, b = 16 ){
    a = 16 , b= 12 
}else  {
    a = 0, b = 0}
    console.log(`A${a}, B${b}`)


++++++++++++++++++++++++++++++
         HW-2

let month ="August"
let a = "July"
let b = "August"
if (month == a || month == b ){
    console.log("approved")
}else {
    console.log("denied")
}

     калькулятор switch 

let a = 2
let b = 2
let operator = "*"
switch(operator){
    case "+":
        console.log(a+b);
    break;
    case "-":
        console.log(a-b);
        break;
    case "*":
        console.log(a*b);
    break;
    case "/":
        console.log(a/b);
        break;
        default:
        console.log("Введите математический оператор")
    break;
    }
     калькулятор if 

let a = 2
let b = 2
let operator = "/";

if (operator == "+"){

    if (a !== 0 && a !== 1 &&a !== 2 && a !== 3 && a !== 4 && a !== 5 && a !== 6 && a !== 7 && a !== 8 && a !== 9 || 
        b !== 1 && b !== 2 && b !== 3 && b !== 4 && b !== 5 && b !== 6 && b !== 7 && b !== 8 && b !== 9 ){
        console.log("Введите цифру от 0 до 9!")
    }

    else {
    console.log(`${a} + ${b} = ${a+b}`)}
}

else if(operator == "-" ) {

    if (a !== 0 && a !== 1 &&a !== 2 && a !== 3 && a !== 4 && a !== 5 && a !== 6 && a !== 7 && a !== 8 && a !== 9 || 
        b !== 1 && b !== 2 && b !== 3 && b !== 4 && b !== 5 && b !== 6 && b !== 7 && b !== 8 && b !== 9 ){
        console.log("Введите цифру от 0 до 9!")
    }else {

    
    console.log(`${a} - ${b} = ${a-b}`)
}
    }

else if(operator == "*"){
    if (a !== 0 && a !== 1 &&a !== 2 && a !== 3 && a !== 4 && a !== 5 && a !== 6 && a !== 7 && a !== 8 && a !== 9 || 
        b !== 1 && b !== 2 && b !== 3 && b !== 4 && b !== 5 && b !== 6 && b !== 7 && b !== 8 && b !== 9 ){
        console.log("Введите цифру от 0 до 9!")
    }else {
    console.log(`${a} * ${b} = ${a*b}`)
}
    }

else if(operator == "/"){

    if (a !== 0 && a !== 1 &&a !== 2 && a !== 3 && a !== 4 && a !== 5 && a !== 6 && a !== 7 && a !== 8 && a !== 9 || 
        b !== 1 && b !== 2 && b !== 3 && b !== 4 && b !== 5 && b !== 6 && b !== 7 && b !== 8 && b !== 9 ){
        console.log("Введите цифру от 0 до 9!")
    }
    else if (b == 0){
        console.log(`На ноль делить воспрещается!`)
    }else {
    console.log(`${a} / ${b} = ${a/b}`)
    }
}

else if (operator !== "+" && operator !== "-" && operator !== "*" && operator !== "/"){
    console.log("Введите корректный оператор из списка : \n 1. + \n 2. - \n 3. * \n 4. / ")
}

         УЛИТКА
let afternoon = 3
let night = -2
let result

console.log(`В первый день улитка преодолела ${afternoon+night} метр(ов)`)
result = night+afternoon
console.log(result)
console.log(`Во второй день улитка преодолела ${afternoon+night+result} метр(ов)`)
result = night+afternoon+result
console.log(result)
console.log(`В третий день улитка преодолела ${afternoon+night+result} метр(ов)`)
result = afternoon+night+result
console.log(result)
console.log(`В четвертый день улитка преодолела ${afternoon+night+result} метр(ов)`)
result = afternoon+night+result
console.log(result)
console.log(`В пятый день улитка преодолела ${afternoon+night+result} метр(ов)`)
result = afternoon+night+result
console.log(result)
            HW VOLK

 Напишите программу для расчета стоимости билетов. 
 Для пассажиров старше 18 лет- полная цена, для младенцев младше 2 лет - 10% стоимости, 
 для детей от 2-х до 18ти лет - 50 % стоимости, 
 для пенсионеров старше 65 лет - 60% стоимости

let ticketPrice = 100;
let years2 = 0.10
let years218 = 0.5
let years65 = 0.60
let passengeryears = 0
if ( passengeryears < 2){
    console.log(`Стоимость билета для пассажира меньше двух лет: \n${(ticketPrice*years2)} рублей`)
}else if(passengeryears >= 2 && passengeryears <18 ){
    console.log(`Стоимость билета для пассажира от двух до восемнадцати лет: \n${(ticketPrice*years218)} рублей`)
}else if(passengeryears >= 65 ){
    console.log(`Стоимость билета для пассажира старше 65 лет: \n${(ticketPrice*years65)} рублей`)
}else {
    console.log(`Стоимость билета для пассажира старше 18 лет: \n${(ticketPrice)} рублей`)
}


learnJS HW

======= 1 Переделать в if ====== 
switch (browser) {
  case 'Edge':
    alert( "You've got the Edge!" );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Okay we support these browsers too' );
    break;

  default:
    alert( 'We hope that this page looks ok!' );
}

let c = "Chrome"
let s = "Safari"
let o = "Opera"
let f = "Firefox"
let a = "Edge"
let browser = a
if (browser == c || browser == s||browser == o||browser == f){
  console.log('Okay we support these browsers too')
}else {
  console.log("We hope that this page looks ok!")
}
======= 2 передаелать в switch
const number = +prompt('Введите число между 0 и 3', '');

 РЕШЕНИЕ

if (number === 0) {
  alert('Вы ввели число 0');
}

if (number === 1) {
  alert('Вы ввели число 1');
}

if (number === 2 || number === 3) {
  alert('Вы ввели число 2, а может и 3');
}

РЕШЕНИЕ

let number = "4"
switch (number){
    case "0":
        console.log('Вы ввели число 0')
        break;
    case "1":
        console.log('Вы ввели число 1')
        break;
        case "2":
        case "3":
        console.log('Вы ввели число 2, а может и 3')
