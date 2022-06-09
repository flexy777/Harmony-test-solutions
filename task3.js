function calculator(num1, num2){
    let operation = prompt("Enter expression")
   
   if(num1 === "" && num2 === "" && operation === ""){
      return 0;
   }
    if (operation === "+"){
     return `The addition of ${num1} and ${num2} = ${Number(num1)+Number(num2)}`;
    }
    else if (operation === "-"){
     return `The subtraction of ${num1} and ${num2} = ${Number(num1)-Number(num2)}`;
    }
    else if (operation === "*"){
     return `The multiplication of ${num1} and ${num2} = ${Number(num1)*Number(num2)}`;
    }
    else if (operation === "/"){
     return `The division of ${num1} and ${num2} = ${Number(num1)/Number(num2)}`;
    }
    else if (operation === ""){
     return num2
    }
   }
   
   let first_num = prompt("Enter first number")
   let second = prompt("Enter second number")
   calculator(first_num, second)
