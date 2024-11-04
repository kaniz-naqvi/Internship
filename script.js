let main=document.querySelector("section");
let projects=[
    {
        projectLink:"CodeAlpha_Project-IMAGE-GALLERY/gallery.html", projrctName:"Image Gallery",  code:"https://github.com/kaniz-naqvi/Internship/tree/main/CodeAlpha_Project-IMAGE-GALLERY",
         projectDetails:`<p>
        The <strong>NatureLovers</strong> website is a fully responsive, interactive nature gallery featuring collections of <strong>flowers</strong>, <strong>forests</strong>, and <strong>skies</strong>.
        Built using <strong>Bootstrap</strong>, the site includes a sleek, mobile-friendly navigation bar that collapses into a menu on smaller devices,
        with links to a blog, about page, and social media profiles.
      </p>
      <h3>Key Features:</h3>
      <ul>
        <li>
          <strong>Dynamic Image Gallery:</strong> Users can browse through different images in each section using clickable thumbnails and arrow buttons.
        </li>
        <li>
          <strong>Responsive Design:</strong> The layout adjusts seamlessly to different screen sizes, ensuring an optimal experience on both desktop and mobile devices.
        </li>
        <li>
          <strong>Bootstrap Components:</strong> The site leverages Bootstrap's navbar, buttons, and grid system for a polished, professional look across all devices.
        </li>
      </ul>`, 
    },
    {
        projectLink:"CodeAlpha-project-Calculator/cal.html", projrctName:"Calculator Web Application",  code:"https://github.com/kaniz-naqvi/Internship/tree/main/CodeAlpha-project-Calculator",
         projectDetails:`<p>
        The <strong>Calculator</strong> web application is a responsive and interactive tool designed for performing basic arithmetic operations. Built with <strong>HTML</strong>, <strong>CSS</strong>, and <strong>JavaScript</strong>, it features a user-friendly interface and dynamic functionality.
    </p>

    <h2>Key Features:</h2>
    <ul>
        <li><strong>Responsive Design</strong>: Adapts to various screen sizes, ensuring a consistent user experience on desktops and mobile devices.</li>
        <li><strong>Dark and Light Mode</strong>: Easily toggle between modes for comfortable viewing in different lighting conditions.</li>
        <li><strong>Functional Buttons</strong>: Includes buttons for numbers, operations, a clear button (C), a delete button, and a result button (=) for efficient calculations.</li>
        <li><strong>Error Handling</strong>: Gracefully manages invalid inputs by displaying "Error" when necessary.</li>
    </ul>

    <h2>Usage:</h2>
    <p>
        Users can perform basic arithmetic calculations with real-time input display and smooth error management. The application combines modern design with functionality, making it a versatile tool for everyday calculations.
    </p>`, 
    },
]
projects.forEach(project => {
    main.innerHTML+=`<div>
            <ol>
                <h2>${project.projrctName}</h2>
                <ul>
                <li>
                    <details>
                        <summary><u>project details</u></summary>
                        ${project.projectDetails}
                    </details>
                </li>
                <li><a href="${project.projectLink}" target="_blank">Live preview</a></li>
                <li><a href="${project.code}" target="_blank">Go to Code</a></li>
                </ul>
                
            </ol>
        </div>`;
});
