//1
//Меня зовут Гульфайруз Конлашарова, и мне 26 лет
let firstName = "Гульфайруз";
let lastName = "Конлашарова";
let age = 26;

let message = `Меня зовут ${firstName} ${lastName}, и мне ${age} лет`;
console.log(message);

//2
// Я родом из города Астана
let city = " Астана ";
console.log(" Я родом из города " + city);

//3
const password = "kasper00";
const hasAccess = true;
console.log("Password:", password);
console.log("Has Access:", hasAccess);

//4
let isMember = false;
let memberString = isMember.toString();
console.log(memberString);
console.log(typeof memberString);

//5
let cartItems =  0;
let itsEmpty = Boolean();

console.log(cartItems);
// потому что 0 это false 

//6
const averageScore = 89.75695;
console.log(averageScore.toFixed(1));


//7
let greetingMessage = "      Приветствуем вас в мире программирования!        ";
console.log(greetingMessage.trim());
console.log(greetingMessage.toUpperCase());
console.log(greetingMessage.includes("ПРОГРАММИРОВАНИЯ"));
console.log("'программирования'?:");

//8
 let input = prompt(" Введите ваш возраст !");
if ( input === null ){
    alert("Вход отменён")
} else if (input.trim() === ""){
    alert("Необходимо ввести данные");
} else if (isNaN(input)){
    alert("Недопустимый формат. Введите число")
} else if (Number(input) < 18){
alert("Доступ ограничен!")
} else {
    alert("Добро пожаловать!")
}

// 9
let secretNumber = 6;
let input1 = prompt("Введите число от 1 до 10");
if ( input1 === null ){
    alert("Вход отменён")
}else if (input1.trim() === ""){
    alert("Введите число");
}else if (isNaN(input)){
    alert("Недопустимый формат. Введите число")
} else{
    let userNumber = Number(input1);
    if ( userNumber === secretNumber){
        alert("Поздравляем! Вы угадали число!");
    }else if (userNumber > secretNumber){
        alert("Слишком большое число")
    } else {
        alert("Слишком маленькое число")
    }
}

// 10
let day = prompt("Введите время суток");

if (day === null){
    alert("Вы отменили ввод")
} else {
    day = day.trim().toLowerCase();
}
if( typeof day !== "string" || day === ""){
    alert("Ошибка! Вы ввели неккоректные данные")
} else if ( day === "утро"){
    alert("Рекомендуем выпить кофе!")
}else if ( day === "день"){
    alert("Рекомендуем выпить чай!")
}else if ( day === "вечер"){
    alert("Рекомендуем выпить горячий шоколад!")
} else {
    alert("Ошибка! Пожалуйста, введите одно из трех значений: утро, день, вечер ")
}




