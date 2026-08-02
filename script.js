const heart = document.getElementById("heart");
const complimentBox = document.getElementById("compliment");
const counter = document.getElementById("count");


let opened = JSON.parse(localStorage.getItem("opened")) || [];


// временные тестовые комплименты
const compliments = [

"Диана, твоя улыбка способна сделать любой день светлее ❤️",
"Диана, рядом с тобой даже простые моменты становятся особенными ✨",
"Диана, в тебе есть невероятное тепло, которое хочется чувствовать рядом 💕",
"Диана, твои глаза умеют говорить больше любых слов 🌸",
"Диана, ты умеешь делать мир вокруг красивее просто своим присутствием 🌷",
"Диана, твоя доброта — одна из самых красивых вещей в тебе 💖",
"Диана, с тобой хочется улыбаться чаще 😊",
"Диана, ты удивительным образом сочетаешь нежность и силу 🌙",
"Диана, твой смех — маленькое счастье, которое хочется слышать снова",
"Диана, ты человек, которого приятно помнить даже спустя годы ✨"

];


const rareCompliments = [

"🌟 РЕДКИЙ: Диана, среди миллионов людей есть те, кого встречаешь случайно, но помнишь навсегда ❤️",

"🌟 РЕДКИЙ: Диана, если бы красоту можно было сохранить в пикселях — ты была бы самым красивым арт-объектом 🎮",

"🌟 РЕДКИЙ: Диана, твоя душа заслуживает отдельной истории, которую хочется перечитывать 📖",

"🌟 РЕДКИЙ: Диана, этот комплимент появился только для тебя. Другого такого нет ✨"

];



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


    let available = [
        ...compliments,
        ...rareCompliments
    ];


    let unused = available.filter(
        (item)=> !opened.includes(item)
    );


    if(unused.length === 0){

        complimentBox.textContent =
        "Диана открыла все 180 комплиментов ❤️";

        return;

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
