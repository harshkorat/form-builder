const express = require('express');
const router = express.Router();
const { saveForm, getForm, listForms, updateForm } = require('../controllers/formController');

router.post('/save', saveForm);
router.get('/:id', getForm);
router.get('/', listForms);
router.put('/update/:id', updateForm);

module.exports = router;
