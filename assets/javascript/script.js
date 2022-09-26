const hideShowBtn = document.querySelector(".hide-show");
const textHidden = document.querySelector(".hidden");
const main = document.querySelector("main");
const navbar = document.querySelector("nav");
const product = document.getElementById("product");
const article = document.querySelector("article");

const resultContainer = document.querySelector(".result-container");

const AccessKey = "zI1YYRRsdKQw2AnMReliXfogtCfcaO2UuTuJmPsbNdw";
const secretKey = "fEcMMrd0oJaLmJu6P7uwGJFZJvkuxDcnfXM6S7bo0O8";

const body = document.body;

// checkbox navbar

hideShowBtn.addEventListener("click", () => {
  if (textHidden.classList.contains("hidden")) {
    hideShowBtn.textContent = "Hide";
    textHidden.classList.remove("hidden");
  } else {
    hideShowBtn.textContent = "Show";
    textHidden.classList.add("hidden");
  }
});

const fetchUnsplash = () => {
  const value = document.getElementById("meat-input").value;

  fetch(`https://api.unsplash.com/search/photos?page=1&query=${value}&client_id=${AccessKey}`)
    .then((response) => response.json())
    .then((result) => {
      const results = result.results;

      console.log(results);

      results.forEach((res) => {
        // make container for whole card
        const apiCards = document.createElement("div");
        apiCards.classList.add("api-cards");
        apiCards.classList.add("card");

        //make api-card thumbnail component
        const cardsThumbnail = document.createElement("div");
        cardsThumbnail.classList.add("cards-thumbnail");

        //make element inside body component
        const header = document.createElement("h2");
        const paragraph = document.createElement("p");
        const textHeader = document.createTextNode(`Likes: ${res.likes}`);
        const textParagraph = document.createTextNode(res.alt_description !== null ? res.alt_description : "No Description");
        // append text to element
        header.appendChild(textHeader);
        paragraph.appendChild(textParagraph);

        //make image thumbnail element

        const imageThumb = document.createElement("img");
        imageThumb.classList.add("image-thumb");
        imageThumb.src = res.urls.regular;

        //make api-card body component
        const cardsBody = document.createElement("div");
        cardsBody.classList.add("cards-body");

        // make api-card footer component
        const cardsFooter = document.createElement("div");
        cardsFooter.classList.add("cards-footer");

        // make details button
        const detailButton = document.createElement("a");
        detailButton.href = res.links.download;
        detailButton.classList.add("detail-button");
        detailButton.innerText = "Details";

        // append all created element

        cardsBody.appendChild(header);
        cardsBody.appendChild(paragraph);
        cardsFooter.appendChild(detailButton);
        cardsThumbnail.appendChild(imageThumb);
        apiCards.appendChild(cardsThumbnail);
        apiCards.appendChild(cardsBody);
        apiCards.appendChild(cardsFooter);

        resultContainer.appendChild(apiCards);

        resultContainer.scrollIntoView(true);
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

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
