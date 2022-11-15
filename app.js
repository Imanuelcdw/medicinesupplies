require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 3000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const medicineRouter = require('./routes/medicine')

app.use('/api/medicine', medicineRouter)

app.get('/', (req, res) => {
  res.send('MEDICINE SUPPLIES')
})

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, { dbName: 'medicinesupplies' })
    app.listen(port, () => console.log(`listening to port : ${port}`))
  } catch (error) {
    console.log(error)
  }
}

start()
