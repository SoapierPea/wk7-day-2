//==========Exercise #1 ===========//
/*
Write a function that passes through the below object and displays all of their
favorite food dishes as shown:
*/
let person = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}
function desc(alist){
    for(let item in alist)
    {
        console.log(`${item}: `)
        if(alist[item] instanceof Object)
        {
            if(alist[item][0] instanceof Object)
            {
                for(let key in alist[item][0]){
                    console.log(`${key}: `)
                    console.log(`${alist[item][0][key]}`)
                }
            }else{
                for(let part in alist[item]){
                    console.log(`${alist[item][part]}`)
                }
            }
        }else
        {
            console.log(`${alist[item]}`)
        }
    }
}
desc(person)




//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype


// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 

class Human{
    constructor(name,age,gender){
        this.name = name
        this.age = age
        this.gender = gender
    }
    returnInfo(){
        return `Name ${this.name}\nAge ${this.age}\nGender ${this.gender}`
    }
    }
    function addAge(age){
      newAge = 1
      return age + newAge;
        
    }
    let Wilma = new Human('Wilma',25,'Female')
    console.table(Wilma)
    console.table(Wilma.returnInfo())
    

// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const isLarge = (astring) =>{return new Promse((resolve, reject) =>
    {
        if (astring.length > 10)
        {
            resolve(true)
        }else{
            reject(false)
        }
    })
}

