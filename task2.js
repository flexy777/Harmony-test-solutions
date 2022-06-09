function ordinal(num){

    let suffix = "";
    
    if(num === 1 || num % 10 === 1){
     suffix = "st"
    }
    else if(num === 2 || num % 10 === 2){
     suffix = "nd"
    }
    else if(num === 3 || num % 10 === 3){
     suffix = "rd"
    }
    else{
     suffix = "th"
    }
   
    return num+suffix;
   }


   ordinal(0) //outputs 0th
   ordinal(21) //outputs 21st
   ordinal(32) //outputs 32nd
   ordinal(53) //outputs 53rd
