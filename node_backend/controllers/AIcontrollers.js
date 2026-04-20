const express = require('express');
const jwt = require('jsonwebtoken');
const { Pool } = require('pg'); // Postgres
const mongoose = require('mongoose'); // MongoDB
const axios = require('axios');


// post the text and send back response
const getResponse = async (req, res, next) => {
    const { text } = req.body;

    if (!text) {
        return res.status(400).json({ error: "No text provided" });
    }

    try {
        const response = await axios.post("http://localhost:8000/generate", { text })
        console.log('AI Service Response:', response.data);

        next()
        return res.status(200).json({ text: response.data.text });
    } catch (error) {
        console.error("Error calling AI service:", error.message);
        res.status(500).json({ error: "Failed to connect to AI service" });
    }

};

module.exports = { getResponse }; 