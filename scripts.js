let d1 = document.getElementById("description-1")
let b1 = document.getElementById("description-box-1")
b1.addEventListener("mouseover", () => {
    d1.innerText = "This is a list of my Instagram Ads Interests. Those I agree I have are labelled green; those I find inaccurate red; those even I myself am not sure if I have yellow. Subconsciousness?"
    b1.style.background = "white";
    b1.style.color = "black";
})
b1.addEventListener("mouseout", () => {
    d1.innerText = "What is this?"
    b1.style.background = "black";
    b1.style.color = "white";
})

let d2 = document.getElementById("description-2")
let b2 = document.getElementById("description-box-2")
b2.addEventListener("mouseover", () => {
    d2.innerText = "These are all emojis I have used to comment others' posts for the past few years, in reverse chronological order. Interestingly, some clusters of the same emojis actually belong to different comments. Maybe it shows my state of mind/mood during a period."
    b2.style.background = "white";
    b2.style.color = "black";
})
b2.addEventListener("mouseout", () => {
    d2.innerText = "What is this?"
    b2.style.background = "black";
    b2.style.color = "white";
})

let d3 = document.getElementById("description-3")
let b3 = document.getElementById("description-box-3")
b3.addEventListener("mouseover", () => {
    d3.innerText = "The ratio of the area shows the frequency I have used each vowel for commenting others' posts for the past few years. This sketch might not only portray a personal language usage habit but a general linguistic phenomenon."
    b3.style.background = "white";
    b3.style.color = "black";
})
b3.addEventListener("mouseout", () => {
    d3.innerText = "What is this?"
    b3.style.background = "black";
    b3.style.color = "white";
})

let d4 = document.getElementById("description-4")
let b4 = document.getElementById("description-box-4")
b4.addEventListener("mouseover", () => {
    d4.innerText = "This was a selfie before I adjusted the image threshold level, making it \"binary\" with only black and white pixels. Then I filled the black area with all the DMs sent by me."
    b4.style.background = "white";
    b4.style.color = "black";
})
b4.addEventListener("mouseout", () => {
    d4.innerText = "What is this?"
    b4.style.background = "black";
    b4.style.color = "white";
})

let d5 = document.getElementById("description-5")
let b5 = document.getElementById("description-box-5")
b5.addEventListener("mouseover", () => {
    d5.innerText = "The bubbles are a visualization of my Instagram activities in the past three years. The larger the bubble is the more activities there are. Types of activities are color coded."
    b5.style.background = "white";
    b5.style.color = "black";
})
b5.addEventListener("mouseout", () => {
    d5.innerText = "What is this?"
    b5.style.background = "black";
    b5.style.color = "white";
})