let Base_API ="https://superheroapi.com/api.php/5835040bfb352cd244f9cdc70553c3ef" 
const heroImg = document.getElementById("heroImage")
const searchInput =document.getElementById('searchInput')
const searchButton = document.getElementById("searchButton")
const newHeroButton = document.getElementById("newHeroButton")

const getNameOfHero=()=>
{
        return searchInput.value.trim()
}

//get hero fro name or keyword
searchButton.onclick= () =>{
    
    const heroName = getNameOfHero()
    if(!heroName)
    {
        alert("Enter Name of Character ")
    }
    
    fetch(`${Base_API}/search/${heroName}`)
    .then(Response => Response.json())
    .then(json => {
        if(json.response="success"&& json.results && json.results.length > 0 )
        {
            const imageUrl = json.results[0].image.url
            heroImg.innerHTML = `<img src='${imageUrl}'/>`
        }

        else{
            alert("No such character found")
        }
        
    })
    .catch(error => {
        console.error("Error fetching data:", error);
        alert("Failed to fetch data. Please try again later.");
    });


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
        heroImg.innerHTML= `<img src ='${json.image.url}' height=200 width=200 />`     })
}


// const getHero =()=>{
//     console.log("Let's Find your Favourite Hero")
//     fetch(`https://superheroapi.com/api.php/5835040bfb352cd244f9cdc70553c3ef/332`)
//     .then(Response => Response.json())
//     .then(json => {
//         console.log(json)
//     })


// }
// getHero()