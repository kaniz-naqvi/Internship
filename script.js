let main=document.querySelector("section");
let projects=[
    {
        projectLink:"CodeAlpha_Project-IMAGE-GALLERY/gallery.html", projrctName:"Image Gallery",  code:"https://github.com/kaniz-naqvi/Internship/tree/main/CodeAlpha_Project-IMAGE-GALLERY",
         projectDetails:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis cum iusto repudiandae consectetur recusandae distinctio nisi reiciendis necessitatibus laudantium explicabo dignissimos ab, tempore quam ducimus fugiat ea itaque facere perferendis.Ratione quia expedita recusandae quis, ab reprehenderit ex animi porro mollitia similique dolorem nostrum? Nobis sed ab ipsum corrupti. Quasi debitis vel explicabo numquam impedit cupiditate rem, mollitia veniam perferendis?Nam aliquid eius ad fuga sunt doloribus vitae. Fugit repellat tempore quidem iste voluptates, cupiditate saepe repudiandae fuga quo eum optio labore vero excepturi harum magni at laboriosam, illo pariatur.Eaque reiciendis porro nihil laudantium aspernatur placeat ab beatae in, voluptas, tenetur vitae rerum fugiat, suscipit consequuntur quas sequi omnis cum. Consequuntur, debitis corporis nulla dolore ad suscipit vitae distinctio!Laudantium provident repellendus a veritatis tempora corrupti maiores quod error nisi asperiores hic accusamus dignissimos, assumenda sed saepe est distinctio. Iure tempore quo incidunt velit! Quam id beatae reprehenderit corrupti!", 
    },
    {
        projectLink:"CodeAlpha-project-Calculator/cal.html", projrctName:"Calculator",  code:"https://github.com/kaniz-naqvi/Internship/tree/main/CodeAlpha-project-Calculator",
         projectDetails:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis cum iusto repudiandae consectetur recusandae distinctio nisi reiciendis necessitatibus laudantium explicabo dignissimos ab, tempore quam ducimus fugiat ea itaque facere perferendis.Ratione quia expedita recusandae quis, ab reprehenderit ex animi porro mollitia similique dolorem nostrum? Nobis sed ab ipsum corrupti. Quasi debitis vel explicabo numquam impedit cupiditate rem, mollitia veniam perferendis?Nam aliquid eius ad fuga sunt doloribus vitae. Fugit repellat tempore quidem iste voluptates, cupiditate saepe repudiandae fuga quo eum optio labore vero excepturi harum magni at laboriosam, illo pariatur.Eaque reiciendis porro nihil laudantium aspernatur placeat ab beatae in, voluptas, tenetur vitae rerum fugiat, suscipit consequuntur quas sequi omnis cum. Consequuntur, debitis corporis nulla dolore ad suscipit vitae distinctio!Laudantium provident repellendus a veritatis tempora corrupti maiores quod error nisi asperiores hic accusamus dignissimos, assumenda sed saepe est distinctio. Iure tempore quo incidunt velit! Quam id beatae reprehenderit corrupti!", 
    },
    
]
projects.forEach(project => {
    main.innerHTML+=`<div>
            <ol>
                <h2>${project.projrctName}</h2>
                <ul>
                <li>
                    <details>
                        <summary>project details</summary>
                        ${project.projectDetails}
                    </details>
                </li>
                <li><a href="${project.projectLink}" target="_blank">Live preview</a></li>
                <li><a href="${project.code}" target="_blank">Go to Code</a></li>
                </ul>
                
            </ol>
        </div>`;
});
