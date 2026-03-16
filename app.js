const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const requestLogger = require('./middleware/requestLogger');
const errorHandler = require('./middleware/errorHandler');

module.exports = (db) => {
    const app = express();
    app.set('view engine', 'ejs');
    app.use(express.json()); // For parsing application/json
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(express.static('public'));

    // Inject the database into the routes
    routes(app, db);

    app.use(requestLogger);
    app.use(errorHandler); // Add this as the last middleware

    return app;
};// Section 1 completed for LinkedIn Learning course
// Section 3 completed for LinkedIn Learning course
// Section 5 completed for LinkedIn Learning course
// Completed the  LinkedIn Learning course
