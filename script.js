const heart = document.getElementById("heart");
const complimentBox = document.getElementById("compliment");
const counter = document.getElementById("count");


let opened = JSON.parse(localStorage.getItem("opened")) || [];
let achievements = JSON.parse(localStorage.getItem("achievements")) || [];



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
checkAchievements();

});



updateCounter();
function resetGame(){

    localStorage.clear();

    opened = [];

    updateCounter();

    complimentBox.textContent =
    "Прогресс сброшен ❤️";

}
function checkAchievements(){

    let count = opened.length;


    const list = [

        {
            id: "first",
            count: 1,
            text: "🍬 Первый сладкий"
        },

        {
            id: "ten",
            count: 10,
            text: "💕 Первые шаги"
        },

        {
            id: "thirty",
            count: 30,
            text: "🌸 Уже нравится"
        },

        {
            id: "fifty",
            count: 50,
            text: "✨ Полпути к улыбке"
        },

        {
            id: "trend",
            count: 67,
            text: "🔥 В тренде"
        },

        {
            id: "repeat",
            count: 69,
            text: "🔁 Надо повторить"
        },

        {
            id: "hundred",
            count: 100,
            text: "💖 Коллекционер тепла"
        },

        {
            id: "onefifty",
            count: 150,
            text: "🌟 Почти легенда"
        },

        {
            id: "finish",
            count: 180,
            text: "👑 Пройдено"
        }

    ];


    list.forEach(item => {

        if(
            count >= item.count &&
            !achievements.includes(item.id)
        ){

            achievements.push(item.id);

            localStorage.setItem(
                "achievements",
                JSON.stringify(achievements)
            );


            showAchievement(item.text);

        }

    });
function showAchievement(text){

    let box = document.createElement("div");

    box.className = "achievement-popup";

    box.textContent = text;


    document.body.appendChild(box);


    setTimeout(()=>{

        box.remove();

    },3000);

}
}
