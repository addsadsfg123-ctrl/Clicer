const heart = document.getElementById("heart");
const complimentBox = document.getElementById("compliment");
const counter = document.getElementById("count");


let opened = JSON.parse(localStorage.getItem("opened")) || [];




function createHeart() {

    const h = document.createElement("div");

    h.className = "pixel-heart";
    h.innerHTML = "❤️";

    h.style.left = Math.random() * 90 + "vw";
    h.style.bottom = "20px";

    document.body.appendChild(h);


    setTimeout(() => {
        h.remove();
    },2000);
}



function updateCounter(){

    counter.textContent = opened.length;

}



heart.addEventListener("click",()=>{


    createHeart();


    let pool;


let chance = Math.random();


if(chance < 0.15 && rareCompliments.length > 0){

    pool = rareCompliments;

} else {

    pool = compliments;

}


let unused = pool.filter(
    (item)=> !opened.includes(item)
);


    if(unused.length === 0){

    let otherPool = pool === compliments 
    ? rareCompliments 
    : compliments;


    unused = otherPool.filter(
        (item)=> !opened.includes(item)
    );

}


    let random =
    unused[Math.floor(Math.random()*unused.length)];


    opened.push(random);


    localStorage.setItem(
        "opened",
        JSON.stringify(opened)
    );


    complimentBox.textContent = random;


    updateCounter();

});



updateCounter();
function resetGame(){

    localStorage.clear();

    opened = [];

    updateCounter();

    complimentBox.textContent =
    "Прогресс сброшен ❤️";

}
