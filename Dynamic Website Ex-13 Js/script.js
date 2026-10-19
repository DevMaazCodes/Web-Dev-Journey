var counter=0;
function createCard(title, cName, views, monthsOld, duration, thumbnail){
    let divCard=`<div class="card">
            <div class="thumbnail">
                <img alt="thumbnail">
                <span></span>
            </div>
            
            <div class="text">
            <div class="title"></div>
            <div class="foot">
                <span class="cname"></span> <span class="views"></span><span class="old"></span> </div>
            </div>
        </div>
    </div>`
    document.getElementsByClassName("container")[0].insertAdjacentHTML("beforeend",divCard)
    let card=document.getElementsByClassName("card")[counter];
    card.children[0].children[0].setAttribute("src",thumbnail);
    card.children[0].children[1].innerHTML=duration;
    card.children[1].children[0].innerHTML=title;
    card.children[1].children[1].children[0].innerHTML=`${cName} - `
    if (views<1000) card.children[1].children[1].children[1].innerHTML=`${views} - `;
    else if(views>=1000&&views<1000000){
        views=Math.floor(views/1000);
        card.children[1].children[1].children[1].innerHTML=`${views}K - `
    }
    else if(views>=1000000&&views<1000000000){
        views=(views/1000000);
        views=Math.round(views*10)/10;
        card.children[1].children[1].children[1].innerHTML=`${views}M - `
    }
    else if(views>=1000000000&&views){
        views=(views/1000000000);
        views=Math.round(views*10)/10;
        card.children[1].children[1].children[1].innerHTML=`${views}B - `
    }
    card.children[1].children[1].children[2].innerHTML=`${monthsOld} months old`
    counter++;
}
createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 560000, 7, "40:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")
createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 560000, 7, "40:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")
createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 560000, 7, "40:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")
createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 560000, 7, "40:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")
createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 1900003420, 7, "40:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")
createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 560000, 7, "40:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")
createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 560000, 7, "40:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")
