document.getElementById('Python').style.display = "block";
function openLangue(evt, cityName) {
var i, tabcontent, tablinks;
tabcontent = document.getElementsByClassName("tabcontent");
for (i = 0; i < tabcontent.length; i++) {
tabcontent[i].style.display = "none";
}
tablinks = document.getElementsByClassName("tablinks");
for (i = 0; i < tablinks.length; i++) {
tablinks[i].className = tablinks[i].className.replace(" active", "");
}
document.getElementById(cityName).style.display = "block";
evt.currentTarget.className += " active";
}



const gap = 16;

const carousel = document.getElementById("carousel"),
  content = document.getElementById("content"),
  next = document.getElementById("next"),
  prev = document.getElementById("prev");
next.addEventListener("click", e => {
  carousel.scrollBy(width + gap, 0);
  if (carousel.scrollWidth !== 0) {
    prev.style.display = "flex";
  }
  if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "none";
  }
});
prev.addEventListener("click", e => {
  carousel.scrollBy(-(width + gap), 0);
  if (carousel.scrollLeft - width - gap <= 0) {
    prev.style.display = "none";
  }
  if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "flex";
  }
});

let width = carousel.offsetWidth;
window.addEventListener("resize", e => (width = carousel.offsetWidth));





const gape = 16;

const carousel_2 = document.getElementById("carousel_2"),
  content_2 = document.getElementById("content_2"),
  nextt = document.getElementById("nextt"),
  pres = document.getElementById("pres");
nextt.addEventListener("click", e => {
  carousel_2.scrollBy(width2 + gape, 0);
  if (carousel_2.scrollWidth !== 0) {
    pres.style.display = "flex";
  }
  if (content_2.scrollWidth - width2 - gape <= carousel_2.scrollLeft + width2) {
    nextt.style.display = "none";
  }
});
pres.addEventListener("click", e => {
  carousel_2.scrollBy(-(width2 + gape), 0);
  if (carousel_2.scrollLeft - width2 - gape <= 0) {
    pres.style.display = "none";
  }
  if (!content.scrollWidth - width2 - gape <= carousel_2.scrollLeft + width2) {
    nextt.style.display = "flex";
  }
});

let width2 = carousel.offsetWidth;
window.addEventListener("resize", e => (width2 = carousel.offsetWidth));



