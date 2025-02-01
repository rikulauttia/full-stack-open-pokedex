const express = require('express')
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 8080

app.use(express.static('dist'))

app.get('/version', (req, res) => {
  res.send('3')
})

app.get('/health', (req, res) => {
  // eslint-disable-next-line no-constant-condition
  if (true) throw 'error...  '
  res.send('ok')
})

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server started on port ${PORT}`)
})
