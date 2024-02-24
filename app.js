const express = require('express')
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5000

app.get('/version', (req, res) => {
  res.send('12') // change this string to ensure a new version deployed
})

app.get('/health', (req, res) => {
  res.send('ok')
})

app.get('/ping', (req, res) => {
  res.json({ message: 'pong' })
  // res.status(500).send('Internal Server Error')
})

// app.get('/health', () => {
//   throw('error...  ')
// })

app.use(express.static('dist'))

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`server started on port ${PORT}`)
})