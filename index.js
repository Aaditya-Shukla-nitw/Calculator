console.log("Hellow World");
let sum = "";
let operator = "";
let num = "";
function display(a){
    let screen = document.getElementById("display");
    if(Number.isInteger(Number.parseInt(a))){
        screen.innerHTML = screen.innerHTML + a;
        sum = sum + a;
    }else{
        let t=screen.innerHTML;
        /*console.log(t.charAt(t.length-1));
        let p = Number.parseInt(t.charAt(t.length-1));
        console.log(Number.isInteger(p));*/

        //Checks if the last char in display is an integer
        //if not then you cannot add a operator for ex. "12 +/ 12" is invalid
        if(Number.isInteger(Number.parseInt(t.charAt(t.length-1)))){
            screen.innerHTML = screen.innerHTML + a;
            if(operator==""){
                operator = a;
            }else{
                let x = Number.parseInt(sum);
                let y = Number.parseInt(num);
                let z;
                switch(operator){
                    case "*": z = x*y; 
                    case "+": z = x+y; 
                    case "-": z = x-y; 
                    case "/": z = x/y; 
                }
            }
        }
    }
    
}