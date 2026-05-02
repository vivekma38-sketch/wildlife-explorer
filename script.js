//   <!-- ================= ADVANCED JS (script.js) ================= -->
const container = document.getElementById("animals");
const aboutSection = document.getElementById("about");

let allAnimals = [];

fetch('http://localhost:3000/animals')
  .then(res => res.json())
  .then(data => {
    allAnimals = data;
    displayAnimals(allAnimals);
  });

function displayAnimals(data) {
  container.innerHTML = "";
  aboutSection.classList.add("hidden");

  data.forEach(a => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${a.img}" />
      <h3>${a.name}</h3>
      <p>${a.info}</p>
    `;

    container.appendChild(card);
  });
}

function filterAnimals(type) {
  if (type === 'all') {
    displayAnimals(allAnimals);
  } else {
    const filtered = allAnimals.filter(a => a.type === type);
    displayAnimals(filtered);
  }
}

function showAbout() {
  container.innerHTML = "";
  aboutSection.classList.remove("hidden");
}


