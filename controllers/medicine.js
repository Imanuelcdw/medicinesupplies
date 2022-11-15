const Medicine = require('../models/medicine')
const asyncHandler = require('express-async-handler')

class MedicineController {
  static all = asyncHandler(async (req, res) => {
    const data = await Medicine.find()
    res.json(data)
  })
  static show = asyncHandler(async (req, res) => {
    const { _id } = req.params
    const data = await Medicine.findOne({ _id })
    res.json(data)
  })
  static store = asyncHandler(async (req, res) => {
    const data = await Medicine.create(req.body)
    res.json(data)
  })
  static update = asyncHandler(async (req, res) => {
    const { _id } = req.params
    const data = await Medicine.findOneAndUpdate({ _id }, req.body, { new: true })
    res.json(data)
  })
  static destroy = asyncHandler(async (req, res) => {
    const { _id } = req.params
    const data = await Medicine.deleteOne({ _id })
    res.json(data)
  })
}

module.exports = MedicineController
