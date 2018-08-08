'use strict'
require('dotenv').config()
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { PORT, CLIENT_ORIGIN } = require('./config');
const dogRouter = require('./routers/dogs.router')
const { dbConnect } = require('./dbs/db-mongoose')
const app = express();
// body parser middleware
app.use(express.json())

// Create a static webserver
app.use(express.static('public'));

app.use(
    morgan(process.env.NODE_ENV === 'production' ? 'common' : 'dev', {
        skip: (req, res) => process.env.NODE_ENV === 'test'
    })
);

app.use(cors());

app.use('/dog', dogRouter)

// Catch-all 404
app.use(function (req, res, next) {
    const err = new Error('Not Found')
    err.status = 404
    next(err)
})

// Catch-all Error handler
// Add NODE_ENV check to prevent stacktrace leak
app.use(function (err, req, res, next) {
    res.status(err.status || 500)
    res.json({
        message: err.message,
        error: app.get('env') === 'development' ? err : {}
    })
})

function runServer(port = PORT) {
    app.listen(PORT, function () {
        console.info(`Server listening on ${this.address().port}`);
    }).on('error', err => {
        console.error(err)
    });
}

if (require.main === module) {
    dbConnect();
    runServer();
}

module.exports = { app };
