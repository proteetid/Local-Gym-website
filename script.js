let slides = document.querySelectorAll(".slide");
let index = 0;

function showSlide(i) {
  slides[index].classList.remove("active");
  index = (i + slides.length) % slides.length;
  slides[index].classList.add("active");
}

// next / prev buttons
document.querySelector(".next").onclick = () => showSlide(index + 1);
document.querySelector(".prev").onclick = () => showSlide(index - 1);

// auto slide every 6 sec
setInterval(() => {
  showSlide(index + 1);
}, 6000);

let title = document.getElementById("main-title");
let text = title.innerText;

title.innerHTML = "";

text.split("").forEach((letter, i) => {
  let span = document.createElement("span");
  span.innerHTML = letter === " " ? "&nbsp;" : letter;
  span.style.animationDelay = `${i * 0.05}s`;
  title.appendChild(span);
});