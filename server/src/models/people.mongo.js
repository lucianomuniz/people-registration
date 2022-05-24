const mongoose = require('mongoose');

const peopleSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  name: {
    type: String,
    required: true,
  },
  phones: {
    type: [{ ddd: String, number: String }],
    required: true,
  },
});

module.exports = mongoose.model('Person', peopleSchema);
