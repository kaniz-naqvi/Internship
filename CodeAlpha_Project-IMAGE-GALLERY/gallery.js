let main = document.querySelector("main");
let sections = [
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
        <img src="gallery-images/${section.mainImg}.png" class="${section.class}" alt="${section.heading}" onclick="showFullscreen('${section.mainImg}')">
      </div>
      <div class="other-imgs">
        <button class="btn btn-primary left-arrow" onclick="changeImage(${index}, -1)"><i class="ri-arrow-left-wide-line"></i></button>
        <img src="gallery-images/${section.mainImg}.png" alt="${section.heading}" onclick="${section.function}('gallery-images/${section.mainImg}.png', ${index})">
        <img src="gallery-images/${section.firstImg}.png" alt="${section.heading}" onclick="${section.function}('gallery-images/${section.firstImg}.png', ${index})">
        <img src="gallery-images/${section.secondImg}.png" alt="${section.heading}" onclick="${section.function}('gallery-images/${section.secondImg}.png', ${index})">
        <img src="gallery-images/${section.thirdImg}.png" alt="${section.heading}" onclick="${section.function}('gallery-images/${section.thirdImg}.png', ${index})">
        <img src="gallery-images/${section.forthImg}.png" alt="${section.heading}" onclick="${section.function}('gallery-images/${section.forthImg}.png', ${index})">     
        <button class="btn btn-primary right-arrow" onclick="changeImage(${index}, 1)"><i class="ri-arrow-right-wide-line"></i></button>
      </div>
    </section>`;
});

// Initialize current indexes for each section
let currentIndexes = sections.map(() => 0); // start with the first image (index 0)

// Set the initial active class on the main images
setActiveImages();

function setActiveImages() {
  sections.forEach((section, index) => {
    const currentImgSrc = `gallery-images/${section.mainImg}.png`;
    const activeImg = document.querySelector(`section:nth-of-type(${index + 1}) .other-imgs img[onclick*="${currentImgSrc}"]`);
    if (activeImg) {
      activeImg.classList.add("active");
    }
})
}

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
    changeFlowerImg(newImgSrc, sectionIndex);
  } else if (section.function === "changeForestImg") {
    changeForestImg(newImgSrc, sectionIndex);
  } else if (section.function === "changeSkyImg") {
    changeSkyImg(newImgSrc, sectionIndex);
  }
}

// Functions to change the main image for each section
function changeFlowerImg(imgsrc, sectionIndex) {
  updateImage(imgsrc, sectionIndex, ".mainFlowerImg");
}

function changeForestImg(imgsrc, sectionIndex) {
  updateImage(imgsrc, sectionIndex, ".mainForestImg");
}

function changeSkyImg(imgsrc, sectionIndex) {
  updateImage(imgsrc, sectionIndex, ".mainSkyImg");
}

// General function to update image and manage active class
function updateImage(imgsrc, sectionIndex, mainClass) {
  removeActiveClass(sectionIndex);
  const currentMainImg = document.querySelector(mainClass);
  currentMainImg.setAttribute('src', imgsrc);
  const activeImg = document.querySelector(`section:nth-of-type(${sectionIndex + 1}) .other-imgs img[onclick*="${imgsrc}"]`);
  if (activeImg) {
    activeImg.classList.add("active");
  }
}

// Function to remove the active class from images in the current section
function removeActiveClass(sectionIndex) {
  const images = document.querySelectorAll(`section:nth-of-type(${sectionIndex + 1}) .other-imgs img`);
  images.forEach(img => img.classList.remove("active"));
}
