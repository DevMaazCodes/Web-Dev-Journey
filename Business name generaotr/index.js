let adj={
 0:"Crazy",
 1:"Amazing",
 2:"Fire"
}
let shop_name={
 0:"Engine",
 1:"Food",
 2:"Garments"
}
let word={
 0:"Bros",
 1:"Limited",
 2:"Hub"
}
let a=Math.floor((Math.random()*100))%3
let b=Math.floor((Math.random()*100))%3
let c=Math.floor((Math.random()*100))%3
console.log(`${adj[a]} ${shop_name[b]} ${word[c]}`)
