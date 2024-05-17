const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const noteRoutes = require('./routes/noteRoutes');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use('/api/notes', noteRoutes);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
