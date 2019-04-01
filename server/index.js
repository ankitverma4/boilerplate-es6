import express from 'express';

// var express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Test API is running");
})

app.listen(3000, () => {
    console.log("Server started.");
    
});

