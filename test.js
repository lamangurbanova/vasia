let a = parseInt(prompt("Birinci deyeri daxil et"));
let b = parseInt(prompt("Ikinci deyeri daxil et"));
let operation = prompt("Emeliyyat deyeri daxil et + / * -");




switch (operation){
    case "+": 
        console.log("Result:" +`${a+b}`);
        break;
    case "-":
        console.log("Result:" +`${a-b}`)
        break;
    case "/":
        console.log("Result:" +`${a/b}`)
        break;
    case "*":
        console.log("Result:" +`${a*b}`)
        break;
    default:
        console.log("----")
}

