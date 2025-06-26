const express = require('express')
const bodyParser = require('body-parser')

const Router = require('./routes')
const app = express()
const port = 3000

// parse application/json
app.use(bodyParser.json())

app.use(Router)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})