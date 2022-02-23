/* Attribution and credit to the Youtuber, Dev Ed, and their great work.
Here's the link to his tutorial: https://www.youtube.com/watch?v=GUEB9FogoP8

The code has been modified from their tutorial, but much of the original's skeleton remains.

To reinforce the animation concept for myself, I've written comments about what each piece of code does.
*/

const text = document.querySelector(".name"); // This line takes the h1 from index.html and makes it usable in JS.
const stringText = text.textContent; // This const takes the value of the h1's text content ("Jake McInerney").
const splitText = stringText.split(""); // This const splits the text content in an array.
text.textContent = ""; // This line prevents the h1 from being put onto the browswer twice in the header.

// The following for loop allows each index within the splitText array to receive a "span" tag in index.html.
// The span tags on each index allow the user to manipulate the text styling in style.css.
// The innerHTML allows the JS to print the array onto the .name class in index.html.
// splitText[i] represents each individual character in the h1, including the space between "Jake" and "McInerney".
// The <span> and </span> creates the span tag, and the splitText[i] is the value within each span.
// splitText.length prevents the loop from looping continuously, and gives the function an endpoint when the length of splitText is reached.
for (let i = 0; i < splitText.length; i++) {
  text.innerHTML += "<span>" + splitText[i] + "</span>";
}

// These let variables give a starting point
let character = 0;
let timer = setInterval(onRefresh, 50);

function onRefresh() {
  const span = text.querySelectorAll("span")[character];
  span.classList.add("fade-in");
  character++;
  if (character === splitText.length) {
    complete();
    return;
  }
}

function complete() {
  clearInterval(timer);
  timer = null;
}
