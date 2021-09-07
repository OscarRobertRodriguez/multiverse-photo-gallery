const cards = document.querySelectorAll(".card");
const modal = document.querySelector(".modal");
const modalImg = document.querySelector(".modal-img");
const closeBtn = document.querySelector(".close-btn");
const rightChevron = document.querySelector(".chevron-right");
const leftChevron = document.querySelector(".chevron-left");

var counter = 0;

let images = [
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12",
];

cards.forEach((card, index) => {
  card.addEventListener("click", () => {
    showModal();
    // displayClickedImg(index);
  });
});

// rightChevron.addEventListener("click", () => {
//   nextImage();
// });

modal.addEventListener("click", (e) => {
  const target = e.target;
  if (target === e.currentTarget) {
    hideModal();
  }
});

closeBtn.addEventListener("click", () => {
  hideModal();
});

// function nextImage() {
//   if (counter === images.length - 1) {
//     counter = 0;
//     modalImg.src = `./assets/images/${images[counter]}.jpg`;
//   } else {
//     modalImg.src = `./assets/images/${images[counter + 1]}.jpg`;
//   }
//   counter++;
// }

function hideModal() {
  modal.classList.remove("show");
}

function showModal() {
  modal.classList.add("show");
}

// function displayClickedImg(index) {
//   modalImg.src = `./assets/images/${images[index]}.jpg`;
//   counter = index;
// }
