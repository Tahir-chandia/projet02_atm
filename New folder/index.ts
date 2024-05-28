import inquirer from "inquirer";

let balance = 50000
let myPin = 1234
console.log(`\nYour balance is: ${balance}\n`);


const pinCode = await inquirer.prompt({
   name:"pin",
   type:"number",
   message:"Enter your pin code: "
})

if(pinCode.pin==myPin){
   console.log("\nWelcome!\n");

   const options = await inquirer.prompt({
      name:"select",
      type:"list",
      message:"Select your option",
      choices:["Withdraw","Check balance","Fast cash"] 
   })
   if(options.select=="Withdraw"){
      const amount = await inquirer.prompt({
         name:"amount",
         type:"number",
         message:"Enter amount to withdram: "
      })
         balance -= amount.amount
         if(balance>=amount.amount){
            console.log(`Your remaining balance is: ${balance}`);
         }else{console.log("Insufficient amount");
         }}
    if(options.select=="Check balance"){
      console.log(`Your balance is : ${balance}`);
    }     

    if(options.select=="Fast cash"){
      const amountAns = await inquirer.prompt({
         name:"amount",
         type:"list",
         message:"Select your amount",
         choices:["5000","10000","20000","30000","50000"]
      })
      switch (amountAns.amount) {
         case "5000":balance-=amountAns.amount
         console.log(`Your remaining balance is : ${balance}`);

            break;
      }
      switch (amountAns.amount) {
         case "10000":balance-=amountAns.amount
         console.log(`Your remaining balance is : ${balance}`);

            break;
      }
      switch (amountAns.amount) {
         case "20000":balance-=amountAns.amount
         console.log(`Your remaining balance is : ${balance}`);

            break;
            
    }
    switch (amountAns.amount) {
      case "30000":balance-=amountAns.amount
      console.log(`Your remaining balance is : ${balance}`);

         break;}
         switch (amountAns.amount) {
            case "50000":balance-=amountAns.amount
            console.log(`Your remaining balance is : ${balance}`);
   
               break;}
               
         
   }
    
   
}else{console.log("Invalid pin code!!!");
}