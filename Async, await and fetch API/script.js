 async function getData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(455);
        },3000)
    }) //this becomes an async function by adding the async keyword
}
let data=getData()

// data.then(v=>{console.log(data)}) this was the promise way of handling with waiting of fulfillment of promises as we need to wait for the settlement of promise given by fetch api usually to process with later code