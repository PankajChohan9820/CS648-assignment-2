const express = require('express')
// const res = require('express/lib/response')
const app = express()
app.use(express.static('public'))

app.listen(3000)