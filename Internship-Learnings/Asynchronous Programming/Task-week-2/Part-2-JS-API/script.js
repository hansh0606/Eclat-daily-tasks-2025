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

    //Total Number of posts
    const post_count = json.reduce((acc,curr)=>{
        if(acc.userId==curr.userId)
        {
            acc+1   
        }
        return acc+1
    },0)
    console.log("\n⭐Number of posts:" + post_count)
    console.log("\n⭐Posts per User:")
    //count Number of posts for each User
    const postCountsByUserId = json.reduce((acc, curr) => {
        if(acc[curr.userId])
        {
            acc[curr.userId] = acc[curr.userId]+1
        }

        else{
            acc[curr.userId] = 1
        }

        return acc;
    }, {});

    for(let userId in postCountsByUserId ){
        console.log("UserId "+userId+":"+postCountsByUserId[userId]+" posts")

    } 
}

fetch_data()

 //Output:
 /*
 API is in process...

⭐Post with the longest title:
✵User ID: 5
✵Title: repellendus qui recusandae incidunt voluptates tenetur qui omnis exercitationem
✵Body: error suscipit maxime adipisci consequuntur recusandae
voluptas eligendi et est et voluptates
quia distinctio ab amet quaerat molestiae et vitae
adipisci impedit sequi nesciunt quis consectetur
✵Length of Title : 79

⭐Number of posts:100
⭐Posts per User:
UserId 1:10 posts
UserId 2:10 posts
UserId 3:10 posts
UserId 4:10 posts
UserId 5:10 posts
UserId 6:10 posts
UserId 7:10 posts
UserId 8:10 posts
UserId 9:10 posts
UserId 10:10 posts
*/ 
