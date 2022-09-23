const hideShowBtn = document.querySelector(".hide-show");
const textHidden = document.querySelector(".hidden");
const main = document.querySelector("main");
const navbar = document.querySelector("nav");
const article = document.querySelector("article");

const AccessKey = "zI1YYRRsdKQw2AnMReliXfogtCfcaO2UuTuJmPsbNdw";
const secretKey = "fEcMMrd0oJaLmJu6P7uwGJFZJvkuxDcnfXM6S7bo0O8";

hideShowBtn.addEventListener("click", () => {
  if (textHidden.classList.contains("hidden")) {
    hideShowBtn.textContent = "Hide";
    textHidden.classList.remove("hidden");
  } else {
    hideShowBtn.textContent = "Show";
    textHidden.classList.add("hidden");
  }
});

//unsplash api

// Navbar Observer

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        navbar.classList.remove("observe");
      } else {
        navbar.classList.add("observe");
        console.log(entry.isIntersecting);
      }
    });
  },
  {
    threshold: 0,
  }
);

console.log(article);

observer.observe(article);
