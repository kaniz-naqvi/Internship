
let main = document.querySelector("main");
let sections = [
  // Define the sections with their images
  {
    heading: "Flowers 🌸",
    mainImg: "image1",
    class: "mainFlowerImg",
    firstImg: "image2",
    secondImg: "image3",
    function: "changeFlowerImg",
    thirdImg: "image4",
    forthImg: "image5"
  },
  {
    heading: "Forest 🌳",
    mainImg: "forest1",
    class: "mainForestImg",
    firstImg: "forest2",
    secondImg: "forest3",
    function: "changeForestImg",
    thirdImg: "forest4",
    forthImg: "forest5"
  },
  {
    heading: "Sky ☁️🌤️",
    mainImg: "sky1",
    class: "mainSkyImg",
    firstImg: "sky2",
    secondImg: "sky3",
    function: "changeSkyImg",
    thirdImg: "sky4",
    forthImg: "sky5"
  }
];

// Create a section for each type of image
sections.forEach((section, index) => {
  main.innerHTML += `
    <section>
      <h1>${section.heading}</h1>
      <div class="main-img">
        <img src="gallery-images/${section.mainImg}.png" class="${section.class}" alt="${section.heading}">
      </div>
      <div class="other-imgs">
        <button class="btn btn-primary left-arrow" onclick="changeImage(${index}, -1)"><i class="ri-arrow-left-wide-line"></i></button>
        <img src="gallery-images/${section.mainImg}.png" alt="${section.heading}" onclick="${section.function}('gallery-images/${section.mainImg}.png')">
        <img src="gallery-images/${section.firstImg}.png" alt="${section.heading}" onclick="${section.function}('gallery-images/${section.firstImg}.png')">
        <img src="gallery-images/${section.secondImg}.png" alt="${section.heading}" onclick="${section.function}('gallery-images/${section.secondImg}.png')">
        <img src="gallery-images/${section.thirdImg}.png" alt="${section.heading}" onclick="${section.function}('gallery-images/${section.thirdImg}.png')">
        <img src="gallery-images/${section.forthImg}.png" alt="${section.heading}" onclick="${section.function}('gallery-images/${section.forthImg}.png')">     
        <button class="btn btn-primary right-arrow" onclick="changeImage(${index}, 1)"><i class="ri-arrow-right-wide-line"></i></button>
      </div>
    </section>`;
});

// Initialize current indexes for each section
let currentIndexes = sections.map(() => 0); // start with the first image (index 0)

function changeImage(sectionIndex, direction) {
  // Get the current section
  let section = sections[sectionIndex];

  // Calculate new index
  currentIndexes[sectionIndex] = (currentIndexes[sectionIndex] + direction + 5) % 5; // 5 is the number of images

  // Get the new image source based on the index
  let newImgSrc;
  switch (currentIndexes[sectionIndex]) {
    case 0:
      newImgSrc = `gallery-images/${section.mainImg}.png`;
      break;
    case 1:
      newImgSrc = `gallery-images/${section.firstImg}.png`;
      break;
    case 2:
      newImgSrc = `gallery-images/${section.secondImg}.png`;
      break;
    case 3:
      newImgSrc = `gallery-images/${section.thirdImg}.png`;
      break;
    case 4:
      newImgSrc = `gallery-images/${section.forthImg}.png`;
      break;
  }

  // Change the main image based on the function specified
  if (section.function === "changeFlowerImg") {
    changeFlowerImg(newImgSrc);
  } else if (section.function === "changeForestImg") {
    changeForestImg(newImgSrc);
  } else if (section.function === "changeSkyImg") {
    changeSkyImg(newImgSrc);
  }
}

// Functions to change the main image for each section
let currentFlowerImg = document.querySelector(".mainFlowerImg");
function changeFlowerImg(imgsrc) {
  currentFlowerImg.setAttribute('src', imgsrc);
}

let currentForestImg = document.querySelector(".mainForestImg");
function changeForestImg(imgsrc) {
  currentForestImg.setAttribute('src', imgsrc);
}

let currentSkyImg = document.querySelector(".mainSkyImg");
function changeSkyImg(imgsrc) {
  currentSkyImg.setAttribute('src', imgsrc);
}
