require('dotenv').config();

const path = require('path');

require('@babel/register');

const express = require('express');

const morgan = require('morgan');

const { Task } = require('./db/models');

const dbConnectionCheck = require('./db/dbConnectionCheck');

const app = express();

dbConnectionCheck();

const { adminCheck } = require('./src/middlewares/common');

app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, './src/public/')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.locals.myKey = 'This Text went from LOCALS';

app.use((req, res, next) => {
  req.isAdmin = Math.round(Math.random());
  next();
});

const renderTemplate = require('./src/lib/renderTemplate');
const Home = require('./src/views/Home');
const Secret = require('./src/views/Secret');
const Dog = require('./src/views/Dog');

const formRoutes = require('./src/Routes/formRoutes');
const postsRoutes = require('./src/Routes/postsRoutes');

app.get('/', (req, res) => {
  renderTemplate(Home, null, res);
});

app.get('/secret', adminCheck, (req, res) => {
  renderTemplate(Secret, null, res);
});

app.get('/dog', (req, res) => {
  renderTemplate(Dog, null, res);
})

app.delete('/delete', async (req, res) => {
  try {
    const { id } = req.body;
    await Task.destroy({ where: { id } });
    // res.json({ delete: 'DONE' });
    res.sendStatus(200);
  } catch (error) {
    console.log('ERROR DELETE', error);
  }
})

app.use('/', formRoutes);
app.use('/', postsRoutes);

// const PORT = process.env.PORT || 9999;

app.listen(process.env.PORT || 9999, () => {
  console.log('Server has been started on 3000 PORT!');
});
