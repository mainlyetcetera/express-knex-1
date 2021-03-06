const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const environment = process.env.NODE_ENV || 'development'
const configuration = require('./knexfile')[environment]
const database = require('knex')(configuration)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.set('port', process.env.PORT || 3000)
app.locals.title = 'Publications'

app.get('/', (req, res) => {
  res.send('Hello, Publications')
})

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on ${app.get('port')}.`)
})

app.get('/api/v1/papers', (req, res) => {
  database('papers').select()
    .then(papers => {
      res.status(200).json(papers)
    })
    .catch(error => {
      res.status(500).json({ error })
    })
})
