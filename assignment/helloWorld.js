/* This JavaScript was originally written by the Youtuber, Dev Ed. Here's the link to his tutorial:
https://www.youtube.com/watch?v=GUEB9FogoP8

It just looks so cool, I couldn't resist!

I will be adding comments about what each piece of the code is doing tomorrow (2/23/22) morning.
*/

const text = document.querySelector(".name");
const stringText = text.textContent;
const splitText = stringText.split("");
text.textContent = "";

for (let i = 0; i < splitText.length; i++) {
  text.innerHTML += "<span>" + splitText[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 50);

function onTick() {
  const span = text.querySelectorAll("span")[char];
  span.classList.add("fade-in");
  char++;
  if (char === splitText.length) {
    complete();
    return;
  }
}

function complete() {
  clearInterval(timer);
  timer = null;
}
