//Callback : function passed as an argumnet to an other function
//Asynchronous programming : parallel execution of code 

//Example
/*console.log("1")
setTimeout(()=>console.log("2"),1000) //setTimeout(callback, delay, [arg1, arg2, ...Args to callback])
console.log("3")*/

//Understanding Syntax of promise
//Promise is impleted using object and callbacks
//Promise contains two functions(callbacks) resolve and reject

const promise_obj = new Promise((resolve , reject)=>{
    setTimeout(() => {
        const isReady = [true,false][Math.floor(Math.random()*2)] 
        isReady? resolve("Project is ready"): reject("Project is not ready")
    },2000)
})

// console.log(promise_obj)
// console.log(
//     promise_obj
//     .then(success=>console.log({success}) )
//     .catch(error=>console.log({error})))
//------------------------------------------------------------------------------------------------------------------------
//Using aync/await
//Rules to use aync/await
//1. Creating function is must
//2.Use async-await keyword

const handle_asyc_await = async()=>{
    try{
        const project = await promise_obj
        console.log("Using async await : "+ project)
    }catch(error){
        console.log("Using async await : "+ error)
    }
    
}

handle_asyc_await()
