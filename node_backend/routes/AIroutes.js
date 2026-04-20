const express = require('express');
const Router = express.Router();
const { getResponse } = require("../controllers/AIcontrollers")

Router.get("/generate", getResponse)

module.exports = Router