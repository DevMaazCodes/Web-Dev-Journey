//  async function getData(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(455);
//         },3000)
//     }) //this becomes an async function by adding the async keyword, an async function returns a promise
// }
async function getData() {
    //let data=await fetch("https://jsonplaceholder.typicode.com/todos/1") this gets the data as a simple get request by default. Get request just retrieve data from server
    let data = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    }) //this is a post request, usually used to upload data to server 
    data = await data.json()
    console.log(data)
    return 0
}
// data.then(v=>{console.log(data)}) this was the promise way of handling with waiting of fulfillment of promises as we need to wait for the settlement of promise given by fetch api usually to process with later code
async function main() { //we can use await inside async function only so we create a main async
    console.log("Hi user")
    console.log("waiting for data now")
    let data = await getData()  //the await keyword waits for the promise to be settled only then it proceeds with the next line of codes, this is the async way of handling with waiting of fulfillment of promises as we need to wait for the fulfillment of promise given by fetch api usually to process with later code, if promise is rejected an error will be given.
    console.log(data)
    console.log("Got data")
}
main()

