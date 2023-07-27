//  carousel one photo

const img = document.getElementById('my_image');
const rightBtn = document.getElementById('right-btn');
const leftBtn = document.getElementById('left-btn');
const descriptionDiv = document.getElementById('description');

// les images
let picturesSa = ['imgs/1-car.png', 'imgs/2-car.png', 'imgs/3-car.png'];
let position = 0;
img.src = picturesSa[0];
const updateContent = () => {
    const sourceDiv = document.getElementsByClassName('photo')[position];
    const sourceContent = sourceDiv.innerHTML;
    descriptionDiv.innerHTML = sourceContent;
}

const moveRight = () => {
    if (position === picturesSa.length - 1) {
        position = 0;
        img.src = picturesSa[position];
    } else {
        position++;
        img.src = picturesSa[position];
    }
    updateContent();
}

const moveLeft = () => {
    if (position === 0) {
        position = picturesSa.length - 1;
        img.src = picturesSa[position];
    } else {
        position--;
        img.src = picturesSa[position];
    }
    updateContent();
}

rightBtn.addEventListener("click", moveRight);
leftBtn.addEventListener("click", moveLeft);

// l'update initiale
updateContent();


// carousel plusieur photos


document.getElementById("Most_popular").style.display = "block";
tablinks = document.getElementsByClassName("tablinks");
tablinks[0].className += " active";
function openTopic(evt, topicName) {
  var i, tabcontentSa, tablinks;
  tabcontentSa = document.getElementsByClassName("tabcontentSa");
  for (i = 0; i < tabcontentSa.length; i++) {
    tabcontentSa[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(topicName).style.display = "block";
  evt.currentTarget.className += " active";
  
}



// carousel javaScript code :

const gap = 16;

const carouselSa = document.getElementById("carouselSa"),
  contentSa = document.getElementById("contentSa"),
  next = document.getElementById("next"),
  prev = document.getElementById("prev");

next.addEventListener("click", e => {
  carouselSa.scrollBy(width + gap , 0);
  if (carouselSa.scrollWidth !== 0) {
    prev.style.display = "flex";
  }
  if (contentSa.scrollWidth - width - gap <= carouselSa.scrollLeft + width) {
    next.style.display = "none";
  }
});
prev.addEventListener("click", e => {
  carouselSa.scrollBy(-(width + gap), 0);
  if (carouselSa.scrollLeft - (width + gap) <= 0) {
    prev.style.display = "none";
  }
  if (!contentSa.scrollWidth - width - gap <= carouselSa.scrollLeft + width) {
    next.style.display = "flex";
  }
});

let width = carouselSa.offsetWidth;
window.addEventListener("resize", e => (width = carouselSa.offsetWidth));

