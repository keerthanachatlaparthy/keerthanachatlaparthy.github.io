const form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);

// import all the fields from the form.
// eg.
// const name = document.getElementById("name");

function handleSubmit(e) {
  e.preventDefault();
  //   here get the values from the form and set it to the resume
  // eg.
  //   const name_resume = document.getElementById("name_resume");
  //   name_resume.innerHTML = name.value;
  //   similarly for all the other fields
  let name = document.getElementById('name').value;
  document.getElementById("name-name").innerHTML = name;
  document.getElementById("name-name").style.fontSize = "20px";
  document.getElementById("name-name").style.color = "darkgray";
  document.getElementById("name").value = '';

  let email = document.getElementById('email').value;
  document.getElementById("email-name").innerHTML = email;
  document.getElementById("email-name").style.fontSize = "10px";
  document.getElementById("email-name").style.color = "blue";
  document.getElementById("email").value = '';

  let phone = document.getElementById('phone').value;
  document.getElementById("phone-name").innerHTML = phone;
  document.getElementById("phone-name").style.fontSize = "10px";
  document.getElementById("phone-name").style.color = "blue";
  document.getElementById("phone").value = '';

  let github = document.getElementById('github').value;
  document.getElementById("github-name").innerHTML = github;
  document.getElementById("github-name").style.fontSize = "10px";
  document.getElementById("github-name").style.color = "blue";
  document.getElementById("github").value = '';

  let linkedin = document.getElementById('linkedin').value;
  document.getElementById("linkedin-name").innerHTML = linkedin;
  document.getElementById("linkedin-name").style.fontSize = "10px";
  document.getElementById("linkedin-name").style.color = "blue";
  document.getElementById("linkedin").value = '';


  let college = document.getElementById('college').value;
  document.getElementById("college-name").innerHTML = college;
  document.getElementById("college-name").style.fontSize = "20px";
  document.getElementById("college-name").style.color = "black";
  document.getElementById("college").value = '';

  let degree = document.getElementById('degree').value;
  document.getElementById("degree-name").innerHTML = degree;
  document.getElementById("degree-name").style.fontSize = "15px";
  document.getElementById("degree-name").style.color = "black";
  document.getElementById("degree").value = '';

  let startingyear = document.getElementById('startingyear').value;
  document.getElementById("startingyear-name").innerHTML = startingyear;
  document.getElementById("startingyear-name").style.fontSize = "10px";
  document.getElementById("startingyear-name").style.color = "black";
  document.getElementById("startingyear").value = '';

  let passingyear = document.getElementById('passingyear').value;
  document.getElementById("passingyear-name").innerHTML = passingyear;
  document.getElementById("passingyear-name").style.fontSize = "10px";
  document.getElementById("passingyear-name").style.color = "black";
  document.getElementById("passingyear").value = '';

  let cgpa = document.getElementById('cgpa').value;
  document.getElementById("cgpa-name").innerHTML = cgpa;
  document.getElementById("cgpa-name").style.fontSize = "10px";
  document.getElementById("cgpa-name").style.color = "black";
  document.getElementById("cgpa").value = '';


  let skills = document.getElementById('skills').value;
  document.getElementById("skills-name").innerHTML = skills;
  document.getElementById("skills-name").style.fontSize = "15px";
  document.getElementById("skills-name").style.color = "black";
  document.getElementById("skills").value = '';

  let project = document.getElementById('project').value;
  document.getElementById("project-name").innerHTML = project;
  document.getElementById("project-name").style.fontSize = "20px";
  document.getElementById("project-name").style.color = "black";
  document.getElementById("project").value = '';


  let description = document.getElementById('description').value;
  document.getElementById("description-name").innerHTML = description;
  document.getElementById("description-name").style.fontSize = "10px";
  document.getElementById("description-name").style.color = "black";
  document.getElementById("description").value = '';

  let link = document.getElementById('link').value;
  document.getElementById("link-name").innerHTML = link;
  document.getElementById("link-name").style.fontSize = "10px";
  document.getElementById("link-name").style.color = "blue";
  document.getElementById("link").value = '';

  let company = document.getElementById('company').value;
  document.getElementById("company-name").innerHTML = company;
  document.getElementById("company-name").style.fontSize = "20px";
  document.getElementById("company-name").style.color = "black";
  document.getElementById("company").value = '';

  let designation = document.getElementById('designation').value;
  document.getElementById("designation-name").innerHTML = designation;
  document.getElementById("designation-name").style.fontSize = "13px";
  document.getElementById("designation-name").style.color = "black";
  document.getElementById("designation").value = '';

  let duration = document.getElementById('duration').value;
  document.getElementById("duration-name").innerHTML = duration;
  document.getElementById("duration-name").style.fontSize = "10px";
  document.getElementById("duration-name").style.color = "black";
  document.getElementById("duration-name").value = '';

  let description1 = document.getElementById('description1').value;
  document.getElementById("description1-name").innerHTML = description1;
  document.getElementById("description1-name").style.fontSize = "10px";
  document.getElementById("description1-name").style.color = "black";
  document.getElementById("description1-name").value = '';
}

function handleLeft() {
  // const left = document.querySelector(".left");
  // const right = document.querySelector(".right");
  // const print = document.querySelector(".print");

  document.querySelector(".left").style.display = "none";
  document.querySelector(".right").style.display = "block";
  document.querySelector(".print").style.display = "block"

}
function handlePrint() {
  // const right = document.querySelector(".right");
  // const left = document.querySelector(".left");
  // const print = document.querySelector("print");
  document.querySelector(".left").style.display = "block";
  document.querySelector(".right").style.display = "block";
  // write more codes here
  window.print();
}