const setupDatabase= require('./setup/setupDatabase');
const setupRoutes = require('./setup/setupRoutes');
const setupCron = require('./setup/setupCron');

const express = require('express');
const app = express();

setupCron();
setupDatabase();
setupRoutes(app);

module.exports = app;
