const heroImg = document.getElementById("heroImage")
const id = document.getElementById('searchInput')
let Base_API ="https://superheroapi.com/api.php/5835040bfb352cd244f9cdc70553c3ef" 
const searchButton = document.getElementById("searchButton")
const newHeroButton = document.getElementById("newHeroButton")

//get hero fro id or keyword
searchButton.onclick= (id,name) =>{
    //calling API
    fetch(`${Base_API}/${id}}`)
    .then(Response => Response.json())
    .then(json => {

        // imageUrl = `${json.image.url}`
        // name = `${json.name}`
        // powerstats = `${json.powerstats}`
        // biography = `${json.biography}`
        // appearance = `${json.appearance}`
        // work = `${json.work}`
        // connections = `${json.connections}`
        // image = `${json.image}`

        //imageUrl = 'https://www.superherodb.com/pictures2/portraits/10/100/83.jpg'
        heroImg.innerHTML = `<img src='${imageUrl}'/>`
    })


} 

const getIdOfHero = ()=>{
    const numberOfHeros = 731
    return Math.floor(Math.random()*numberOfHeros) 
}

//get random hero
newHeroButton.onclick=()=>{

    let heroId = getIdOfHero()
    fetch(`${Base_API}/${heroId}`)
    .then(Response => Response.json())
    .then(json => { 
        heroImg.innerHTML= `<img src ='${json.image.url }' height=200 width=200 />`     })
}


// const getHero =()=>{
//     console.log("Let's Find your Favourite Hero")
//     fetch(`${Base_API}/332`)
//     .then(Response => Response.json())
//     .then(json => {
//         console.log(json)
//     })


// }
// getHero()