const express = require('express');
const path = require('path'); 
const routes = require('./routes');
const mongoose = require('mongoose');
require('dotenv').config();
const db = require('../models');

const app = express();
const PORT = process.env.PORT || 3001;



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(`/`,routes);

try {
  mongoose.connect(process.env.MONGODB_URI ||'mongodb://localhost/limitless-dawn-11698', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex:true,
      useFindAndModify: false
  }).then(() => {
      console.log('Connected to mongodb database. :)')
      app.listen(PORT, () => console.log(`Now listening on http://localhost:${PORT}`))
    });
  } catch (err) {console.log(err)};


  



