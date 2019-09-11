const setupDatabase= require('./setup/setupDatabase');
const setupRoutes = require('./setup/setupRoutes');
const setupCron = require('./setup/setupCron');
const setupMiddleware = require('./setup/setupMiddleware');

const seed = require('./scripts/seed');

const express = require('express');
const app = express();

setupCron();
setupMiddleware(app);
setupDatabase();
setupRoutes(app);

module.exports = app;
