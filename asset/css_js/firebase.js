const button = document.querySelector("button"),
  toast = document.querySelector(".toast");
const closeIcon = document.querySelector(".close"),
  progress = document.querySelector(".progress");

let timer1, timer2;

document.getElementById("checkbox").addEventListener("click", function (e) {
  let isChecked = document.getElementById("checkbox").checked;

  if (isChecked) {
    document.getElementById("submit").disabled = false;
    document.getElementById("submit").classList.remove("disabled");
  } else {
    document.getElementById("submit").disabled = true;
    document.getElementById("submit").classList.add("disabled");
  }
});

document.getElementById("submit").addEventListener("click", function (e) {
  e.preventDefault();
  let userName = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  console.log(userName);
  console.log(password);

  toast.classList.add("active");
  progress.classList.add("active");

  timer1 = setTimeout(() => {
    toast.classList.remove("active");
  }, 5000); //1s = 1000 milliseconds

  timer2 = setTimeout(() => {
    progress.classList.remove("active");
  }, 5300);
});

closeIcon.addEventListener("click", () => {
  toast.classList.remove("active");

  setTimeout(() => {
    progress.classList.remove("active");
  }, 300);

  clearTimeout(timer1);
  clearTimeout(timer2);
});
