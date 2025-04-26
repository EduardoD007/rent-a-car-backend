const express = require("express");
const routes = require('./app/routes');
const cors = require('cors')

const app = express();

const corsConfig = {
  origin: '',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE']
}
app.use(cors(corsConfig))
app.options("", cors(corsConfig))

routes(app);

module.exports = app;