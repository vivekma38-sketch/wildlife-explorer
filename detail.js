const container = document.getElementById("detail");

// URL se id nikaalna
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

// backend se data fetch
fetch('http://localhost:3000/animals')
  .then(res => res.json())
  .then(data => {
    const animal = data.find(a => a.id == id);

    container.innerHTML = `
      <img src="${animal.img}" />
      <h1>${animal.name}</h1>
      <p>${animal.info}</p>
    `;
  })
  .catch(err => console.log(err));