const express = require('express');
const path = require('path'); 
const routes = require('./routes');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(`/`,routes);

try {
    mongoose.connect(process.env.dbUrl, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  }).then(() => {
      console.log('Connected to mongodb database. :)')
      app.listen(PORT, () => console.log(`Now listening on http://localhost:${PORT}`))
    });
  } catch (err) {console.log(err)};
