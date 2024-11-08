// Projects Section
let projects = [
    {
        img: "cal.JPG", alt: "Calculator App Screenshot", title: "Responsive Calculator",
        discription: "A sleek and interactive calculator app that adapts to all screen sizes, featuring dark and light modes, functional buttons, and effective error handling.",
        link: "https://kaniz-naqvi.github.io/Internship/CodeAlpha-project-Calculator/cal.html",
        btn: "Try the Calculator"
    },
    {
        img: "nature-lover.JPG", alt: "NatureLovers Website Screenshot", title: "NatureLovers Gallery",
        discription: "A fully responsive gallery showcasing beautiful nature collections, with interactive image browsing and mobile-friendly navigation.",
        link: "https://kaniz-naqvi.github.io/Internship/CodeAlpha_Project-IMAGE-GALLERY/gallery.html",
        btn: "Explore NatureLovers"
    },
    {
        img: "Capture.PNG", alt: "Amazon Clone Project Screenshot", title: "Amazon Clone",
        discription: "A responsive Amazon clone featuring add-to-cart, real-time currency conversion, user login, and dynamic search.",
        link: "https://kaniz-naqvi.github.io/Amazon/",
        btn: "View Project"
    }
];

let projectHtml = document.getElementById("project");
let projectCards = "";

projects.forEach(project => {
    projectCards += `
        <div class="col-lg-4 col-md-6 mb-4">
          <div class="card bg-dark glow text-light h-100">
            <img src="image/${project.img}" class="card-img-top card-img-fixed" alt="${project.alt}" />
            <div class="card-body">
              <h5 class="card-title">${project.title}</h5>
              <p class="card-text grey">
                ${project.discription}
              </p>
              <a href="${project.link}" target="_blank" class="btn">
                ${project.btn}
              </a>
            </div>
          </div>
        </div>
    `;
});
projectHtml.innerHTML = projectCards; 

// Skills Section
let skills = [
    {
        title: "Responsive Web Design",
        detail: "Creating visually appealing and mobile-friendly websites using HTML5 and CSS3 to enhance user experience across all devices.",
        icon: `<i class="ri-mac-line"></i>`
    },
    {
        title: "HTML & CSS",
        detail: "Building structured and styled web content with HTML5 and CSS3.",
        icon: `<i class="ri-html5-line"></i>`
    },
    {
        title: "JavaScript",
        detail: "Creating dynamic and interactive web applications using JavaScript.",
        icon: `<i class="ri-javascript-line"></i>`
    }
];

let skillsHtml = document.getElementById("skills");
let skillCards = "";

skills.forEach(skill => {
    skillCards += `
        <div class="col-lg-4 col-md-6 mb-4">
          <div class="card card-hover bg-dark py-4 glow">
            <div class="card-body">
              <div class="green fs-1">
                ${skill.icon}
              </div>
              <h5 class="card-title text-light">${skill.title}</h5>
              <p class="card-text grey">
                ${skill.detail}
              </p>
            </div>
          </div>
        </div>
    `;
});
skillsHtml.innerHTML = skillCards; 
