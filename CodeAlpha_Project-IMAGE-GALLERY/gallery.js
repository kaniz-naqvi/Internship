let main = document.querySelector("main");

let sections = [
  {
    heading: "Flowers 🌸",
    mainImg: "image1",
    class: "mainFlowerImg",
    images: ["image2", "image3", "image4", "image5"],
    function: "changeFlowerImg"
  },
  {
    heading: "Forest 🌳",
    mainImg: "forest1",
    class: "mainForestImg",
    images: ["forest2", "forest3", "forest4", "forest5"],
    function: "changeForestImg"
  },
  {
    heading: "Sky ☁️🌤️",
    mainImg: "sky1",
    class: "mainSkyImg",
    images: ["sky2", "sky3", "sky4", "sky5"],
    function: "changeSkyImg"
  }
];

// Create sections for each image category
sections.forEach((section, index) => {
  main.innerHTML += `
    <section data-index="${index}">
      <h1>${section.heading}</h1>
      <div class="main-img">
        <img src="gallery-images/${section.mainImg}.png" class="${section.class}" alt="${section.heading}" onclick="showFullscreen('${section.mainImg}', ${index})">
      </div>
      <div class="other-imgs">
        <button class="btn btn-primary left-arrow" onclick="changeImage(${index}, -1)"><i class="ri-arrow-left-wide-line"></i></button>
        <img src="gallery-images/${section.mainImg}.png" alt="${section.heading}" onclick="${section.function}('gallery-images/${section.mainImg}.png', ${index})">
        ${section.images.map((img) => `
          <img src="gallery-images/${img}.png" alt="${section.heading}" onclick="${section.function}('gallery-images/${img}.png', ${index})">
        `).join('')}
        <button class="btn btn-primary right-arrow" onclick="changeImage(${index}, 1)"><i class="ri-arrow-right-wide-line"></i></button>
      </div>

      <!-- Fullscreen Overlay -->
      <div id="overlay-${index}" class="overlay" onclick="closeFullscreen(event, ${index})">
        <img id="overlayImage-${index}" src="" alt="Full-Screen Image">
      </div>
    </section>`;
});

let currentIndexes = sections.map(() => 0); 

// Set the initial active class on the main images
setActiveImages();

function setActiveImages() {
  sections.forEach((section, index) => {
    const currentImgSrc = `gallery-images/${section.mainImg}.png`;
    const activeImg = document.querySelector(`section:nth-of-type(${index + 1}) .other-imgs img[onclick*="${currentImgSrc}"]`);
    if (activeImg) {
      activeImg.classList.add("active");
    }
  });
}


// Change image based on direction
function changeImage(sectionIndex, direction) {
  let section = sections[sectionIndex];
  currentIndexes[sectionIndex] = (currentIndexes[sectionIndex] + direction + section.images.length) % (section.images.length + 1);

  let newImgSrc;
  if (currentIndexes[sectionIndex] === 0) {
    newImgSrc = `gallery-images/${section.mainImg}.png`;
  } else {
    newImgSrc = `gallery-images/${section.images[currentIndexes[sectionIndex] - 1]}.png`;
  }

  window[section.function](newImgSrc, sectionIndex);
}

// Update main image for each section
function changeFlowerImg(imgsrc, sectionIndex) {
  updateImage(imgsrc, sectionIndex, ".mainFlowerImg");
}

function changeForestImg(imgsrc, sectionIndex) {
  updateImage(imgsrc, sectionIndex, ".mainForestImg");
}

function changeSkyImg(imgsrc, sectionIndex) {
  updateImage(imgsrc, sectionIndex, ".mainSkyImg");
}

function updateImage(imgsrc, sectionIndex, mainClass) {
  removeActiveClass(sectionIndex);
  const currentMainImg = document.querySelector(`section[data-index="${sectionIndex}"] ${mainClass}`);
  currentMainImg.setAttribute('src', imgsrc);
  const activeImg = document.querySelector(`section[data-index="${sectionIndex}"] .other-imgs img[onclick*="${imgsrc}"]`);
  if (activeImg) {
    activeImg.classList.add("active");
  }
}

// Remove active class from other images
function removeActiveClass(sectionIndex) {
  const images = document.querySelectorAll(`section[data-index="${sectionIndex}"] .other-imgs img`);
  images.forEach(img => img.classList.remove("active"));
}

// Fullscreen image view
function showFullscreen(imgSrc, sectionIndex) {
  const overlay = document.getElementById(`overlay-${sectionIndex}`);
  const overlayImage = document.getElementById(`overlayImage-${sectionIndex}`);
  
  // Get the current main image source
  const currentMainImg = document.querySelector(`section[data-index="${sectionIndex}"] .main-img img`).src;

  // Set the overlay image source
  overlayImage.src = currentMainImg;
  overlay.style.display = 'flex'; // Show overlay
}

// Close the fullscreen overlay
function closeFullscreen(event, sectionIndex) {
  if (event.target && event.target.classList.contains('overlay')) {
    event.target.style.display = 'none'; // Hide overlay
  }
}
