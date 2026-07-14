const express = require('express');
const router = express.Router();
const { getDesigns, getDesignById, createDesign } = require('../controllers/catalogController');
const { auth, admin } = require('../middleware/auth');

router.get('/', getDesigns);
router.get('/:id', getDesignById);
router.post('/', auth, admin, createDesign);

module.exports = router;
