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
searchButton.onclick= async() =>{
    
    const heroName = getNameOfHero()
    if(!heroName)
    {
        alert("Enter Name of Character ")
    }
      
    try{
        const url = `${Base_API}/search/${heroName}`
        const response = await fetch(url)
        const json = await response.json()
   
        if(json.response="success"&& json.results && json.results.length > 0 )
        {
                const imageUrl = json.results[0].image.url
                heroImg.innerHTML = `<img src='${imageUrl}'/>`
        }
        else{
                alert("No such character found")
        }
    }
    catch(error){
        console.error("Error fetching data:", error);
        alert("Failed to fetch data. Please try again later.");
    }
        
        
}
    


const getIdOfHero = ()=>{
    const numberOfHeros = 731
    return Math.floor(Math.random()*numberOfHeros) 
}

//get random hero
newHeroButton.onclick= async ()=>{
    let heroId = getIdOfHero()
    try{
        const urlRandomHero =  `${Base_API}/${heroId}`
        const responseRandomHero = await fetch(urlRandomHero)
        const jsonRandomHero = await responseRandomHero.json()

        heroImg.innerHTML= `<img src ='${jsonRandomHero.image.url}' height=200 width=200 />`     

    }

    catch(error){
        console.error("Error fetching data:", error);
        alert("Failed to fetch data. Please try again later.");
    }
    
}


// const getHero =async ()=>{
//     console.log("Let's Find your Favourite Hero")
//     const response = await fetch(`https://superheroapi.com/api.php/5835040bfb352cd244f9cdc70553c3ef/332`)
//     const json = await response.json()
//     console.log(json)
// }
// getHero()