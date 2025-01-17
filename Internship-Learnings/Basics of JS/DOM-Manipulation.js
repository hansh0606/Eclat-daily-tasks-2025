//on Array of Objects
const actors = [
    {name:"Allu Arjun" , networth:600},
    {name:"Ram Charan" , networth:200},
    {name:"Allu Sneha Reddy" , networth:700}
]

const networthOf = actors.filter(x=>x.networth>200)
const nameOfActors = actors.map(x=>x.name).join('*')
console.log(networthOf)

//DOM MANIPULATION
//Use of Strigify
//let index = document.getElementById('index')
//ways to display array of objects on browser
//index.innerHTML = `<h2>${nameOfActors}</h2>`
//index.innerHTML = `<h2>${JSON.stringify(networthOf)}</h2>`
//index.innerHTML = networthOf.map(actor => `<h1>${actor.name}, ${actor.networth} CR</h1>`).join('');

let heading1 = document.getElementById('h2')
console.log(heading1.innerText)
heading1.style.color='pink'
heading1.style.backgroundColor='black'