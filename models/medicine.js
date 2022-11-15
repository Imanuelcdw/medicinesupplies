const mongoose = require('mongoose')

const medicineSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide name'],
    },
    code: {
      type: String,
      required: [true, 'Please provide code'],
    },
    qty: {
      type: Number,
      required: [true, 'Please provide qty'],
    },
    description: {
      type: String,
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model('medicine', medicineSchema)
