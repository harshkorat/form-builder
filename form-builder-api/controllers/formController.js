const Form = require('../models/Form');

exports.saveForm = async (req, res) => {
    try {
        console.log("req body:", req.body);
        const { formName, formData } = req.body;
        if (!formName || !formData) {
            return res.status(400).json({ error: 'Form name and data are required' });
        }
        const form = new Form({ formName, formData });
        console.log(form);
        await form.save();
        res.status(201).json({ message: 'Form saved successfully', form });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to save form' });
    }
};

exports.getForm = async (req, res) => {
    try {
        const form = await Form.findById(req.params.id);
        if (!form) {
            return res.status(404).json({ error: 'Form not found' });
        }
        res.status(200).json(form);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to get form' });
    }
};

exports.listForms = async (req, res) => {
    try {
        const forms = await Form.find();
        res.status(200).json(forms);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch forms' });
    }
};

exports.updateForm = async (req, res) => {
    try {
        const form = await Form.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json({ message: 'Form updated', form });
    } catch (error) {
        res.status(500).json({ error: 'Failed to update form' });
    }
};