#! /usr/bin/env node

import inquirer from "inquirer";


let myBalance = 50000

let myPin = 1234

console.log(`my current balacne is: ${myBalance}`);


       let pinAnswer=await  inquirer.prompt([{
            name:"pin",
            type:"number",
            message:"Enter your pin"
        }])

        if(pinAnswer.pin===myPin){
            console.log("Your pin code is Correct!");
            let operationsAns = await inquirer.prompt({
            name:"operations",
            type:"list",
            message:"Please select your option: ",
            choices:["withdraw","checkbalance","fastcash"]
                })
        if(operationsAns.operations === "withdraw"){
           let amountAns= await inquirer.prompt({
            name:"amount",
           type:"number",
            message:"Enter your amount: ",  })

            myBalance -= amountAns.amount
             console.log(`Your remaining balance is ${myBalance}`);
                        
            if(myBalance<=amountAns.amount){
               console.log("You have insufficient balance!!!");   }
                 }else if(operationsAns.operations ==="checkbalance"){
                console.log(`Your balance is : ${myBalance};`)}
                     else if(operationsAns.operations==="fastcash"){
        
             let cashAns= await inquirer.prompt({
            name:"cash",
            type:"list",
            message:"Select your amount:",
            choices:["5000","15000","30000","50000"]
            })

            if(cashAns.cash==="5000"){
            myBalance -=cashAns.cash
            console.log(`Your remaining balance is ${myBalance}`);
            ;}else if(cashAns.cash==="15000"){
            myBalance -=cashAns.cash
             console.log(`Your remaining balance is ${myBalance}`);
           ;}else if(cashAns.cash==="30000"){
                myBalance -=cashAns.cash
                console.log(`Your remaining balance is ${myBalance}`);
                ;}else if(cashAns.cash==="50000"){
                myBalance -=cashAns.cash
                console.log(`Your remaining balance is ${myBalance}`);
               console.log("You have insufficient balance!!!");   

                        ;}
        

            
            }}
            



            else{
            console.log("Invalid PinCode!!!");}
        