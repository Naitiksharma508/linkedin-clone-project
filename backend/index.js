
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');


dotenv.config(); // This line reads our secret .env file, takes all the variables 

const app = express();
app.use(cors()); // It allows our frontend (running on a different URL) to talk to our backend
app.use(express.json()); 


const authRoutes = require('./routes/auth');
const postRoutes = require('./routes/posts');

const MONGODB_URI = process.env.MONGO_URI;

mongoose.connect(MONGODB_URI)
  .then(() => {

    console.log("Connected to MongoDB");
  })
  .catch(() => {
    console.error("Error connecting to MongoDB");
  });


app.get('/', (req, res) => {
  res.send("Hello World");
});

app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);

const PORT = process.env.PORT || 8080; 

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});