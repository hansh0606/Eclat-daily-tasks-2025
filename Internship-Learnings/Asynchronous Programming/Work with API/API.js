console.log("1st run")

let button = document.getElementById("dogButton")
let  image = document.getElementById("dogImage")
// let text = document.getElementById("text")
// let count=0
button.onclick  = () => {

    console.log("Button Clicked")
    // text.innerText = `Button Clicked ${count++}`

    fetch("https://dog.ceo/api/breeds/image/random") //makes a request and waits for the server's response and return the respose to .then()
    .then(Response => Response.json()) //processes the Response object into JSON data.
    .then(json => { //handles the JSON data
        console.log("2nd run",json.message)
        image.innerHTML = `<img src='${json.message}' hight = 400 width=400/>`
    })
}


console.log("3rd run")

console.log("Button Clicked")
    // text.innerText = `Button Clicked ${count++}`

    fetch("https://dog.ceo/api/breeds/image/random") //makes a request and waits for the server's response and return the respose to .then()
    .then(Response => Response.json()) //processes the Response object into JSON data.
    .then(json => { //handles the JSON data
        console.log("2nd run",json)
        //image.innerHTML = `<img src='${json.message}' hight = 400 width=400/>`
    })