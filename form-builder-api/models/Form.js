const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
    formName: { type: String, required: true },
    formData: { type: Object, required: true },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Form', formSchema);