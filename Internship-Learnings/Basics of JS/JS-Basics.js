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

let phrase = "Hello My name is Hanshvee , I am learning Javascript"
//Count letters of sentence
/*let count = 0;

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


let countedLetters = countLetters(phrase)
console.log(countedLetters)*/

//Sum of array elements
/*let sum = 0;
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


console.log(maxFunc(numbers))*/

//Count frequency of letter in any phrase
/*let frequency = {}
const freq = (phrase)=>{

    for(let letter of phrase)
    {
        if(letter in frequency)
        {
            frequency[letter] = frequency[letter]+1
        }

        else{
            frequency[letter] = 1
        }
    }

    return frequency
}

console.log(freq(phrase))*/

//---------------------------------------------------------------------------------------
//Count frequency of words in any phrase

let wordfreq = {}

const wordFreq = (phrase)=>
{
    let wordArray = phrase.split(' ')
    //console.log(wordArray)
    //return freq(wordArray)
    for(let word of wordArray )
    {
        if(wordfreq in wordArray)
            wordfreq[word]++

        else
        wordfreq[word] = 1;
    }

    return {wordfreq};
}

console.log(wordFreq(phrase))

const pracArray = [2,3,4,5,6,7,8]
//map() : loops and return array
const mapi = (array)=> pracArray.map(number => 2*number)
console.log(mapi(pracArray))

//filter() : loops and return array with conditions
const filter = (array) => pracArray.filter(number => number > 6)
console.log(filter(pracArray))


//Rdeuce() : loops and give you back the accumulator
// The reduce() method runs a function on each array element to produce (reduce it to) a single value.
// The reduce() method works from left-to-right in the array.
// The reduce() method does not reduce the original array.

let sum = numbers.reduce(myFunction);

function myFunction(total, value, index, array) {
  return total + value;
}

// Note that the function takes 4 arguments:

// The total (the initial value / previously returned value)
// The item value
// The item index
// The array itself
// The example above does not use the index and array parameters. It can be rewritten to:

let sumUsingReduce = numbers.reduce(myFunction);

function myFunction(total, value) {
  return total + value;
}

let SUM = numbers.reduce(function(prev,curr){
    return prev+curr
})

console.log(SUM)

//Access object element with reduce
//Arguments taken by reduce reduce(function , number)
const actors = [
    {name:"Allu Arjun" , networth:600},
    {name:"Ram Charan" , networth:200},
    {name:"Allu Sneha Reddy" , networth:700}
]

let calNetworth =  actors.reduce((acc , curr) => acc + curr.networth,0)
console.log('calNetworth : '+ calNetworth)

//Higher Order functions : function that takes arguments as a function




//Calculator

const summation = (a,b) =>{ return a+b }
const Multiplication = (a,b) => a*b
const subtraction = (a,b) =>a-b
const Division = (a,b) =>a/b

console.log("summation : "+summation(2,3))
console.log("Multiplication : "+Multiplication(2,3))
console.log("subtraction : "+subtraction(2,3))
console.log("Division : "+Division(2,3))

//Unique cases 
let arrayNum = [1,2,3,4]
console.log(arrayNum.indexOf("3"))//uses === means also checks the type , returns index
console.log(arrayNum.indexOf(3))
let sent = 'hanshvee aditya patil'
console.log(sent.indexOf('a'))
console.log(sent.indexOf('H'))//index of is case sensitive
console.log(arrayNum.includes("3"))//also case sensitive
console.log(arrayNum.includes(3))//also case sensitive , returns true-false

//var , let , const
var a
console.log(a)



//const c //syntax error
const c=0 
console.log(c)

{
    var a=9
    console.log(a)
    var a=10
    console.log(a)
}
console.log("var a="+a)

let b
console.log("outside block = "+b)
{
    let b=10
    console.log("inside block 1 = "+b)
   // let b=10//no redeclaration //error: already declared
   b=11//reassihnment allowed
    console.log("inside block 2 = "+b)
}

console.log("outside block-2  = "+b)

let arrayEmpty = []
console.log(arrayEmpty.length)