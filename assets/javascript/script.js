const hideShowBtn = document.querySelector(".hide-show");
const textHidden = document.querySelector(".hidden");
const main = document.querySelector("main");
const fetchBtn = document.querySelector(".fetch");

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

fetchBtn.addEventListener("click", () => {
  fetch(`https://api.unsplash.com/search/photos?page=1&query=beef&client_id=${AccessKey}`)
    .then((response) => response.json())
    .then((res) => {
      const result = res.results;
      const imageContainer = document.createElement("article");
      imageContainer.classList.add("imageContainer");
      imageContainer.classList.add("card");
      result.forEach((res) => {
        const newImage = document.createElement("img");
        newImage.src = res.urls.regular;
        newImage.classList.add("burgers");
        newImage.classList.add("card");

        imageContainer.appendChild(newImage);
      });
      main.appendChild(imageContainer);
    })
    .catch((err) => console.log(err));
});

//unsplash api
