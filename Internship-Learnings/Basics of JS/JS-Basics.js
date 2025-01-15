/*let message = "Hello, World!";
console.log(message);


let sym = Symbol('description'); 
console.log(sym);
//-------------------------------------
let name = "Ilya";

console.log( `hello ${1}` );

console.log( `hello ${"name"}` ); 

console.log( `hello ${name}` ); 
//-----------------------------------------
let isGreater = 4 > 1;
console.log( isGreater );*/
//----------------------------------
//Task:

/*function printEven(num)
{
    if(num>=1 && num<=100)
    {
        if(num/2 == 0)
        {
            console.log(num);
        }
    }
    
}


num = Number(prompt("Enter number"))
printEven(num)*/


/*let mul = (p1,p2) => {
    return p1*p2;
}
  
  console.log(mul(2,3));*/


  //Arrays//
  /*
  const employees = ["Hanshvee","Kadam" , "Swapnil" , "Mehul"];
  console.log(employees);

  //Methods on Arrays//

  //push()
  console.log(employees.push("Garima"));
  console.log(employees);

  //pop()
  console.log(employees.pop())
  console.log(employees);

  //join()
  console.log()
  console.log(employees.join(" || "))

  //at() : returns element of some index i
  console.log(employees.at(3)+"\n")

  //shift() : remove first element and shift the array
  console.log(employees.shift()+"\n")
  console.log(employees+"\n")

  //unshift() : add first element and rearrange array
  console.log(employees.unshift("Russell")+"\n")
  console.log(employees+"\n")

  //concat() : does not modify the original array that's why need to take the new variable
  let concat = employees.concat(["😀","😘" , "🤩" , "🥳"])
  console.log(concat.join(" * "))


  let emojis = ["😊", "😂", "😍", "😎" , "🥳"]
  //delete : The delete keyword in JavaScript is not a method but a keyword (or operator) used to remove properties from objects.
  
  console.log("\nEmojis Array length "+emojis.length)
  delete emojis[2]
  console.log("\nEmojis Array length "+emojis.length)
  console.log(emojis)

    
  //copywithin()

  console.log("Original : "+emojis)

  emojis.copyWithin(3,0,1)
  console.log("copywithin (3,0,1) "+ emojis)
  emojis.copyWithin(2,0)
  console.log("copywithin (2,0)"+ emojis)

 //flat() : Flattening an array is the process of reducing the dimensionality of an array.

 let mul_dim = [["Heet","Hanshvee"],["Krish","Hetvi"]];
 console.log(mul_dim)
 console.log(mul_dim.flat())
 

//flatmap()
const myArr = [1, 2, 3, 4, 5,6];
const newArr = myArr.flatMap(x => [x, x * 10]);
console.log(myArr)
console.log(newArr)


 //splice(index of elemnts to be add , no of elements to be removed) : 
 const fruits = ["Banana", "Orange", "Apple", "Mango"];
 fruits.splice(2, 2, "Lemon", "Kiwi");

 */
 //OBJECTS : 

 /*const SoftwareEngineer = {
    name:"Hanshvee",
    role:"Mobile developer",
    technology:"React Native"
 }

 console.log(SoftwareEngineer);
 console.log(SoftwareEngineer.name)
 console.log(SoftwareEngineer.role)
 console.log(SoftwareEngineer.technology)


const ObjectCreation = (name , role , technology) =>
{
    const SDE = {
        name:name,
        role:role,
        technology:technology
    }

    let Intro = `Hello Everyone !! I am ${SDE.name} , Currently working as ${SDE.role} intern at ECLAT Engineering , Here I am going to get hands on experience in ${SDE.technology}`

    return Intro;
}

console.log(ObjectCreation("Hanshvee Aditya Patil" , "Mobile developer" , "React Native"))*/


//LOOPS

const names = ["Hanshvee","Hriday","Mehul","Heet","Archana","Ashsih"]

const numbers = [1,2,3,4,5,6]
const result = [] 
//Simple
/*for(let i=0;i<names.length;i++)
{
    console.log(names[i])
}

//for of
for(let name of names)
{
    console.log(name)
}

for(let num of numbers)
{
    result.push(num)
}
console.log(result)*/


//Count letters of sentence
let count = 0;

//for in loop gives indexes(keys)
//for of loop gives values
const countLetters= (Sentence) =>
{
    for(let letter in Sentence)
    {
        //console.log(Number(letter) + (1))
        count = Number(letter) + 1
    }

    return {count};
}

let countedLetters = countLetters("Hello My name is Hanshvee , I am learning Javascript")
console.log(countedLetters)

//Sum of array elements
let sum = 0;
const sumFunc = (ArrayofNum) =>
{
    for(let num of numbers)
    {
        sum += num;
    }

    return {sum}
}


let ans = console.log(sumFunc(numbers)) 

//find Max from Array
let maxi = numbers[0]
const maxFunc = (ArrayofNum) =>
{
    for(let num of numbers)
    {
        if(num>maxi)
        {
            maxi = num
        }
    }

    return {maxi}
}


console.log(maxFunc(numbers))