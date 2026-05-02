const express = require('express');
const cors = require('cors');

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// 🔥 animals data (with type + image)
let animals = [
  {
    id: 1,
    name: "Lion",
    info: "King of Jungle",
    img: "https://images.stockcake.com/public/d/d/6/dd6c09ba-ea53-47ab-adf0-aaab6bb4e6db_large/majestic-lion-sunset-stockcake.jpg",
    type: "land"
  },
  {
    id: 2,
    name: "Tiger",
    info: "Strong predator",
    img: "https://tse1.mm.bing.net/th/id/OIP.2YOVtPX8cNwNPmhhgdGl7AHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
    type: "land"
  },
  {
    id: 3,
    name: "Elephant",
    info: "Largest land animal",
    img: "https://cdn.pixabay.com/photo/2016/05/28/08/32/elephant-1421167_1280.jpg",
    type: "land"
  },
  {
    id: 4,
    name: "Shark",
    info: "Dangerous sea animal",
    img: "https://upload.wikimedia.org/wikipedia/commons/5/56/White_shark.jpg",
    type: "water"
  },
  {
    id: 5,
    name: "Dolphin",
    info: "Intelligent marine animal",
    img: "dolphin.webp",
    type: "water"
  },
  {
    id: 6,
    name: "Eagle",
    info: "Powerful bird",
    img: "eagle.webp",
    type: "birds"
  },
  {
    id: 7,
    name: "Parrot",
    info: "Colorful bird",
    img: "parrot.jpg",
    type: "birds"
  }
];

// home route
app.get('/', (req, res) => {
  res.send("🌿 Wildlife Server is running");
});

// ✅ GET all animals
app.get('/animals', (req, res) => {
  res.json(animals);
});

// ✅ POST (add new animal)
app.post('/animals', (req, res) => {
  const newAnimal = req.body;

  newAnimal.id = animals.length + 1;
  animals.push(newAnimal);

  res.json({
    message: "Animal added successfully ✅",
    data: newAnimal
  });
});

// ✅ DELETE animal
app.delete('/animals/:id', (req, res) => {
  const id = parseInt(req.params.id);

  const index = animals.findIndex(a => a.id === id);

  if (index !== -1) {
    animals.splice(index, 1);
    res.json({ message: "Animal deleted ❌" });
  } else {
    res.status(404).json({ message: "Animal not found" });
  }
});

// server start
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});