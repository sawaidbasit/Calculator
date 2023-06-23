let input = document.getElementById("input");
let element = document.querySelectorAll("button");
let num1 = "";
let num2 = "";
let operator = "";
let total = 0;

function handleChange(e) {
    // console.log(e)
    if (!operator) {
        num1 = e.value;
    } else {
        num2 = e.value;
    }
}

for (let i = 0; i < element.length; i++) {
    element[i].addEventListener('click', () => {
        // input.value = num1 ;
        // input.value =  num2 ;
        // input.value =  operator ; 


        if (element[i].innerText == "+" ||
            element[i].innerText == "X" ||
            element[i].innerText == "-" ||
            element[i].innerText == "÷" ||
            element[i].innerText == "%"
            

        ) {
            operator = element[i].innerText;
            input.value = "";
            return;

        }

        if (!operator) {
            num1 = input.value + element[i].innerText;
            input.value = num1;
        } else if (element[i].innerText !== "=" && element[i].innerText !== "C") {
            num2 = input.value + element[i].innerText;
            input.value = num2
        }

        if (element[i].innerText == "=") {
            console.log("num1 " + num1)
            console.log("Operator " + operator)
            console.log("num2 " + num2)
            console.log("Total " + total);
            switch (operator) {
                case "+":
                    input.value = total + Number(num1) + Number(num2);
                    total = total + Number(num1) + Number(num2);
                    num1 = 0;
                    break;
                case "-":
                    input.value = total + Number(num1) - Number(num2);
                    total = total + Number(num1) - Number(num2);
                    num1 = 0;
                    break;

                case "X":
                    input.value = (total + Number(num1)) * Number(num2);
                    total = (total + Number(num1)) * Number(num2);
                    num1 = 0;
                    break;

                case "÷":
                    input.value = (total + Number(num1)) / Number(num2);
                    total = (total + Number(num1)) / Number(num2);
                    num1 = 0;
                    break;
                    
                case "%":
                    input.value = (total + Number(num1)) % (100);
                    total = (total + Number(num1)) % (100);
                    num1 = 0;
                    break;

                default:
                    console.log("Please Enter a Value");
                    break;
            }

        }
            else if (element[i].innerText == "C") {
                input.value = "";
                num1 = 0;
                num2 = 0;
                operator = "";
                total = 0;
            }
    })
}
