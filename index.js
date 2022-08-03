let homeScore = document.getElementById("home")
let guestScore = document.getElementById("guest")

function hIncrement1() {
    count = parseInt(homeScore.innerText) 
    count += 1
    homeScore.innerText = count    
}

function hIncrement2() {
    count = parseInt(homeScore.innerText) 
    count += 2
    homeScore.innerText = count  
}

function hIncrement3() {
    count = parseInt(homeScore.innerText) 
    count += 3
    homeScore.innerText = count  
}

function gIncrement1() {
    count = parseInt(guestScore.innerText) 
    count += 1
    guestScore.innerText = count  
}

function gIncrement2() {
    count = parseInt(guestScore.innerText) 
    count += 2
    guestScore.innerText = count  
}

function gIncrement3() {
    count = parseInt(guestScore.innerText) 
    count += 3
    guestScore.innerText = count  
}

function reset() {
    guestScore.innerText = 0  
    homeScore.innerText = 0
}

//console.log(homeScore + " and " + awayScore)