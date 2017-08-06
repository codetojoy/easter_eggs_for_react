
'use strict'

const express = require('express')
const app = express()
const profiles = require('./data/profiles.json')

app.use(function (req, res, next) {
    console.log("TRACER incoming url: " + req.url)
    next()
})

app.get('/profiles', function (req, res) {
  res.json(profiles)
})

app.listen(3000, function () {
  console.log('Ready on 3000')
})

