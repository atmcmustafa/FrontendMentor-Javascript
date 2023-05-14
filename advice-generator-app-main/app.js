let adviceID = document.getElementById("adviceID");
let submitBtn = document.getElementById("btn");
let advice = document.getElementById("advice");

let advices = [{
    text : `"“We cannot solve problems with the kind of thinking we employed when we came up with them.” — Albert Einstein"`
},
{
    text : `"“Learn as if you will live forever, live like you will die tomorrow.” — Mahatma Gandhi"`
},{
    text : "“Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too.” — Mark Twain"
},{
    text : "“Nature has given us all the pieces required to achieve exceptional wellness and health, but has left it to us to put these pieces together.”—Diane McLaren"
},
{
    text : "Nothing in the world can take the place of Persistence. Talent will not; nothing is more common than unsuccessful men with talent. Genius will not; unrewarded genius is almost"
},
{
    text : "“There are three ways to ultimate success: The first way is to be kind. The second way is to be kind. The third way is to be kind.” —Mister Rogers"
},
{
    text :"“Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it.” — Steve Jobs"
},
]


submitBtn.addEventListener("click",()=>{
    let randomIndex = Math.floor(Math.random() * advices.length);
    let randomAdvice = advices[randomIndex];
    advice.textContent = randomAdvice.text;
    adviceID.textContent = `#${randomIndex + 1}`
})


function random() {
    let randomIndex = Math.floor(Math.random() * advices.length);
    let randomAdvice = advices[randomIndex];
    advice.textContent = randomAdvice.text;
    adviceID.textContent = `#${randomIndex + 1}`
}



random();



