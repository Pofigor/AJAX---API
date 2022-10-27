// const renderTemplate = require('../lib/renderTemplate');
// const AllPosts = require('../views/AllPosts');
// const OnePost = require('../views/OnePost');

// const { Task } = require('../../db/models');

// const findAllPosts = async (req, res) => {
//   try {
//     const posts = await Task.findAll();
//     renderTemplate(AllPosts, { posts }, res);
//   } catch (error) {
//     console.log('FIND POSTS ERROR', error);
//   }
// };

// const findOnePost = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const post = await Task.findOne({ where: { id }, row: true });
//     renderTemplate(OnePost, { post }, res);
//   } catch (error) {
//     console.log('FIND ONE POST ERROR', error);
//   }
// };

// module.exports = { findAllPosts, findOnePost };
