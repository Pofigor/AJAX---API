const express = require('express');

const router = express.Router();

const { renderForm, createPost } = require('../Controllers/formControllers');

router.get('/form', renderForm);

router.post('/form', createPost);

module.exports = router;
