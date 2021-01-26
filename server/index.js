require('dotenv').config()
const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.json({
    status: true,
    message: 'Local Host connected'
  })
})

app.listen(8888, console.log(`server running on port:${process.env.PORT}`))