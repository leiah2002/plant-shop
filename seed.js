const mongoose = require('mongoose');
require('dotenv').config();
const Plant = require('./models/plants');

const plants = [
  { name: "Monstera Plant", price: 400, category: "tropical", stock: 10, careLevel: "easy", imageUrl: "images/monstera.jpg" },
  { name: "Peace Lily", price: 500, category: "indoor", stock: 10, careLevel: "easy", imageUrl: "images/peach lilly.png" },
  { name: "Rose Plant", price: 350, category: "outdoor", stock: 10, careLevel: "medium", imageUrl: "images/areca plant.png" },
  { name: "Aloe Vera", price: 400, category: "succulent", stock: 10, careLevel: "easy", imageUrl: "images/aloe vera.jpg" },
  { name: "Strelitzia", price: 500, category: "outdoor", stock: 10, careLevel: "medium", imageUrl: "images/daisy 5.jpg" },
  { name: "Ficus", price: 500, category: "indoor", stock: 10, careLevel: "medium", imageUrl: "images/leiah 3.jpg" },
  { name: "Trailing Peperomia", price: 500, category: "indoor", stock: 10, careLevel: "easy", imageUrl: "images/leiah 2.jpg" },
  { name: "Haworthia", price: 500, category: "succulent", stock: 10, careLevel: "easy", imageUrl: "images/leiah 1.jpg" },
  { name: "Areca", price: 500, category: "tropical", stock: 10, careLevel: "easy", imageUrl: "images/plant 4.png" },
  { name: "Monstera Deliciosa", price: 500, category: "tropical", stock: 10, careLevel: "easy", imageUrl: "images/plant 3.png" },
  { name: "Fuchsia", price: 500, category: "outdoor", stock: 10, careLevel: "medium", imageUrl: "images/plant 2.png" },
  { name: "Agave", price: 500, category: "succulent", stock: 10, careLevel: "easy", imageUrl: "images/plant 1.png" },
  { name: "Fiddle Leaf Fig", price: 500, category: "indoor", stock: 10, careLevel: "hard", imageUrl: "images/plant 5.png" },
  { name: "Pincushion Cactus", price: 500, category: "succulent", stock: 10, careLevel: "easy", imageUrl: "images/succulent.jpg" },
  { name: "Columnar", price: 500, category: "outdoor", stock: 10, careLevel: "easy", imageUrl: "images/plant 9.jpg" },
  { name: "Echeveria", price: 500, category: "succulent", stock: 10, careLevel: "easy", imageUrl: "images/plant 8.jpg" },
  { name: "Medicinal Aloe", price: 500, category: "succulent", stock: 10, careLevel: "easy", imageUrl: "images/plant 7 (2).jpg" },
  { name: "Echeveria Elegans", price: 400, category: "succulent", stock: 10, careLevel: "easy", imageUrl: "images/plant 6.jpg" }
];

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log('Connected to MongoDB!');
    await Plant.deleteMany({});
    await Plant.insertMany(plants);
    console.log('✅ All plants added successfully!');
    process.exit();
  })
  .catch(err => {
    console.error('Error:', err.message);
    process.exit(1);
  });

