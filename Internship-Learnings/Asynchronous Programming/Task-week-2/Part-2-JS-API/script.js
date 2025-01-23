// Fetch Data: Use the JSONPlaceholder API to fetch a list of posts:
// API Endpoint: https://jsonplaceholder.typicode.com/posts

// **Manipulate Data:**

// 1.Group the posts by userId into separate arrays.✔️
// 2.Find the post with the longest title.
// 3.Count the number of posts for each user.✔️

// *Display Results:
// 1.Show the total number of posts.
// 2.Show the post with the longest title.
// 3.Display the count of posts for each userId in a clear format.

// **Advanced JavaScript Concepts:**
// Use async/await for API calls.✔️
// Use Array methods like reduce, map, and filter.
// Use ES6 features like let, const, template literals, and arrow functions.

const fetch_data = async()=>{
    const url = 'https://jsonplaceholder.typicode.com/posts'
    const response = await fetch(url)
    const json = await response.json()
    //console.log(json)

    //Group the posts by userId into separate arrays.
    const groupPost = json.reduce((acc,curr)=>{
        if(!acc[curr.userId])
            {
                acc[curr.userId] = [];
            }
            
            acc[curr.userId].push(curr);
            return acc;
            
        },{})
        
    console.log(groupPost)    
    //Display the count of posts for each userId in a clear format.
    for (const userId in groupPost) 
    {
        console.log(`User ${userId} has ${groupPost[userId].length} posts.`);
    }
}

fetch_data()

  
