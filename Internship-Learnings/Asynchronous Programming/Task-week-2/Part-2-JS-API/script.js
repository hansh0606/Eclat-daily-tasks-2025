// Fetch Data: Use the JSONPlaceholder API to fetch a list of posts:
// API Endpoint: https://jsonplaceholder.typicode.com/posts

// **Manipulate Data:**

// 1.Group the posts by userId into separate arrays.✔️
// 2.Find the post with the longest title.✔️
// 3.Count the number of posts for each user.

// *Display Results:
// 1.Show the total number of posts.✔️
// 2.Show the post with the longest title.✔️
// 3.Display the count of posts for each userId in a clear format.

// **Advanced JavaScript Concepts:**
// Use async/await for API calls.✔️
// Use Array methods like reduce, map, and filter.
// Use ES6 features like let, const, template literals, and arrow functions.

const fetch_data = async()=>{
    console.log("API is in process...")
    const url = 'https://jsonplaceholder.typicode.com/posts'
    const response = await fetch(url)
    const json = await response.json()
    
    //console.log(json)
    //Group the posts by userId into separate arrays.
    const post_objects = json.reduce((acc,curr)=>
    {
        if(!acc[curr.userId])
        {
            acc[curr.userId] = []
        }
        
        
        acc[curr.userId].push(curr)

        return acc
    },{});
    //console.log(post_objects)

    //longest title
    const max_title = json.reduce((acc,curr) =>{
        
        acc=Math.max(curr.title.length,acc)
        return acc
    }, 0 );

    const longestTitlePost = json.reduce((acc, curr) => {
        
        return curr.title.length > acc.title.length ? curr : acc;
    }, { title: '' }); 
    
    console.log('\n⭐Post with the longest title:');
    console.log(`✵User ID: ${longestTitlePost.userId}`);
    console.log(`✵Title: ${longestTitlePost.title}`);
    console.log(`✵Body: ${longestTitlePost.body}`);
    console.log("✵Length of Title : "+ max_title)

    //Number of post for specific user
    const post_count = json.reduce((acc,curr)=>{
        if(acc.userId==curr.userId)
        {
            acc+1   
        }
        return acc+1
    },0)
    console.log("\n⭐Number of posts:" + post_count)

    // const count_eachPost = json.reduce((acc,curr)=>{
    //     if(!acc[curr.userId])
    //     return acc
    // },{})
   
}

fetch_data()

  
