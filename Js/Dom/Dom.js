import { skillsInfo } from "../../lib/skills.js";
import { projects, projectsBtn } from "../../lib/projects.js";
import { blogsInfo } from "../../lib/blogs.js";
import { contactInfo, contactForm } from "../../lib/contact.js";

// ===============================================================
//                  skill part start here
// ===============================================================
const showSkill = document.querySelector(".skill-inner");
const skillDiv = document.createElement("div");
skillDiv.className = "row justify-content-center";
skillsInfo.map((info) => {
  skillDiv.innerHTML += ` 
                        <div class="col-lg-3 ${info.className} col-md-4 offset-1">
                            <div data-blast="bgColor" class="client-side my-skill">
                                <i class="${info.icon}"></i>
                                 <h4>${info.title}</h4>
                                <ul>
                                    <li>${info.skill1}</li>
                                    <li>${info.skill2}</li>
                                    <li>${info.skill3}</li>
                                    <li>${info.skill4}</li>
                                    <li>${info.skill5}</li>
                                    <li>${info.skill6}</li>
                                    <li>${info.skill7}</li>
                                    <li class="hosting">${info.skill8}</li>
                                </ul>
                            </div>
                         </div>`;
});

showSkill.appendChild(skillDiv);

// ===============================================================
//                  skill part end here
// ===============================================================

// ===============================================================
// // project btn group start  here;
// ===============================================================

const btnGroup = document.querySelector(".project-btn-group");
const ul = document.createElement("ul");
ul.className = "project-btn filter-button-group d-flex justify-content-start";
projectsBtn.map((btn) => {
  ul.innerHTML += ` <li class="${btn.class}" data-filter="${btn.filter}">${btn.name}</li>`;
});
btnGroup.appendChild(ul);

// ===============================================================
// // project btn group end  here;
// ===============================================================

// ===============================================================
//                  project info start here
// ===============================================================

const project = document.querySelector(".project-inner");
const projectDiv = document.createElement("div");
projectDiv.className = "row all-project";

projects.map((info) => {
  projectDiv.innerHTML += `
    <div class="my-project ${info.projectType} col-lg-4 col-sm-6">
    <div class="main-project">
      <div class="hover-wrap project-content">
        <div class="project-details">
          <a
            class="btn btn-danger my-2"
            href="${info.githubLink}"
            ><i class="${info.icon1}"></i> <span>GitHub</span></a
          >
          <a
            class="btn btn-success"
            href="${info.liveProject}"
            ><i class="${info.icon2}"></i> <span>Live Project</span></a
          >
        </div>
      </div>
      <div class="item-content project-img my-3">
        <img
          src="${info.projectImage}"
          class="img-fluid w-100"
          alt="6"
        />
      </div>
    </div>
  </div>
    `;
});

project.appendChild(projectDiv);

// ===============================================================
//                  project info end here
// ===============================================================

// ===============================================================
//                  blogs info end here
// ===============================================================

const blogInner = document.querySelector(".blog_inner");
const blogRow = document.createElement("div");
blogRow.className = "row";

blogsInfo.map((info) => {
  blogRow.innerHTML += `
            <div class="col-lg-6 col-sm-6 ${info.className}">
                <div class="blog_main">
                  <div class="blog_img">
                    <img
                      src="${info.blogImage}"
                      class="img-fluid w-100 rounded"
                      alt=""
                    />
                  </div>
                  <div class="blog_text">
                    <h6>
                     ${info.data}
                      <span data-blast="bgColor">${info.blogType}</span>
                    </h6>
                    <a href="#" class="title"
                      >  ${info.title}</a
                    >

                    <p>
                    ${info.discription}
                    </p>
                    <a data-blast="bgColor" href="${info.viewLink}" class="all_btn"
                      >Read More <i class="fas fa-arrow-right"></i
                    ></a>
                  </div>
                </div>
             </div>
    `;
});

blogInner.appendChild(blogRow);

// ===============================================================
//                  blogs info end here
// ===============================================================

// ===============================================================
//                  contacts info end here
// ===============================================================
const contactRight = document.querySelector(".contact-right-side");
const detailsDiv = document.createElement("div");
detailsDiv.className = "contact_details";

contactInfo.map((info) => {
  detailsDiv.innerHTML += `
    <h5 data-blast="color">
        <i class="${info.icon}"></i> ${info.title}
        <span>${info.subTitle}</span>
    </h5>
    `;
});
contactRight.appendChild(detailsDiv);

const form = document.querySelector(".form-input");
const formRow = document.createElement("div");
formRow.className = "row";

contactForm.map((info) => {
  formRow.innerHTML += `
    <div class="col-lg-6">
    <input
      type="${info.type}"
      class="form-control"
      placeholder="${info.placeholder}"
      name="${info.typeName}"
      required
    />
    <div class="invalid-feedback">
      your ${info.errorMsg} is required!
    </div>
  </div>
    `;
});
form.appendChild(formRow);
// ===============================================================
//                  contacts info end here
// ===============================================================
