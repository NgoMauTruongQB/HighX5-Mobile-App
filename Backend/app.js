const express = require('express')

const routes = require('./routes')
const path = require('path');
const cors = require('cors');

const app = express()

app.use(express.json());

// Sử dụng middleware CORS
app.use(cors());

const staticPath = path.join(__dirname, 'public');

app.get('/',(req,res) => {
    res.send('HighX5-Manager_Event_Mobile')
})

app.use(express.static(staticPath));
app.use('/public', express.static('public'))
app.use('/api/auth', routes.auth)
app.use('/api/user', routes.user)

module.exports = app