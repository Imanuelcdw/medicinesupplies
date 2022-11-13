require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 3000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send('test')
})

const start = async () => {
  try {
    app.listen(port, () => console.log(`listening to port : ${port}`))
  } catch (error) {
    console.log(error)
  }
}

start()
