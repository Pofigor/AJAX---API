const renderTemplate = require('../lib/renderTemplate');
const Form = require('../views/Form');

const { Task } = require('../../db/models');


const renderForm = async (req, res) => {
  try {
    const tasks = await Task.findAll();
    renderTemplate(Form, { tasks }, res);
  } catch (error) {
    console.log('ERROR FIND ALL TASKS', error);
  }
};

const createPost = async (req, res) => {
  const { title, text } = req.body;
  try {
    const newTask = await Task.create({ title, text });
    res.json(newTask);
  } catch (error) {
    console.log('ERROR CREATE', error);
  }
};

module.exports = { renderForm, createPost };
