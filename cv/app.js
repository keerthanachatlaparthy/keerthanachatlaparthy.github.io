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
}

function handleLeft() {
  const left = document.querySelector(".left");
  const right = document.querySelector(".right");
  const print = document.querySelector(".print");
  // write more codes here
}
function handlePrint() {
  const right = document.querySelector(".right");
  const left = document.querySelector(".left");
  const print = document.querySelector(".print");
  // write more codes here
}
