const container = document.getElementById("animals");
const aboutSection = document.getElementById("about");

let allAnimals = [];

fetch('http://localhost:3000/animals')
  .then(res => res.json())
  .then(data => {
    allAnimals = data;
    displayAnimals(allAnimals);
  })
  .catch(err => console.log(err));

function displayAnimals(data) {
  container.innerHTML = "";
  aboutSection.classList.add("hidden");

  data.forEach(a => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${a.img}" alt="${a.name}" />
      <h3>${a.name}</h3>
      <p>${a.info}</p>
    `;

    // 🔥 DETAIL PAGE CLICK (NEW)
    card.onclick = () => {
      window.location.href = `detail.html?id=${a.id}`;
    };

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

function searchAnimals() {
  const value = document.getElementById("searchInput").value.toLowerCase();

  const filtered = allAnimals.filter(a =>
    a.name.toLowerCase().includes(value)
  );

  displayAnimals(filtered);
}

function showAbout() {
  container.innerHTML = "";
  aboutSection.classList.remove("hidden");
}
function toggleDarkMode() {
  document.body.classList.toggle("dark");
}