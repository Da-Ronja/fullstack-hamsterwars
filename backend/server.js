const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')

const hamstersRoute = require('./routes/hamsters.js')
const matches = require('./routes/matches.js')
const matchWinners = require('./routes/matchWinners.js')
const winners = require('./routes/winners.js')
const losers = require('./routes/losers.js')

// Settings
// Heroku uses process.env.PORT
const PORT = process.env.PORT || 1337
const buildFolder = path.join(__dirname, '../build')
const staticFolder2 = path.join(__dirname, 'assets')

// Middleware
// Logger - skriv ut info om inkommande request
app.use((req, res, next) => {
	console.log(`${req.method}  ${req.url} `, req.params);
	next()
})
app.use(express.json())
app.use(cors())   // Cross-Origin Resource Sharing
app.use(express.static(buildFolder))

app.use('/assets', express.static(staticFolder2))

// Routes
app.get('/', (req, res) => {
	// Syns inte på grund av express.static
	res.send('Hello from server')
})

// REST API for /hamsters
//app.use('/hamsters', hamsters)
app.use('/hamsters', hamstersRoute);
app.use('/matches', matches)
app.use('/matchWinners', matchWinners)
app.use('/winners', winners)
app.use('/losers', losers)

// Sist: fånga alla övriga request
// För att frontend routing ska fungera
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '../build/index.html'))
})



// Starta servern
app.listen(PORT, () => {
	console.log('Server listening on port ' + PORT);
})