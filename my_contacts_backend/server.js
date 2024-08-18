const express = require("express");
const http = require("http");

const dotenv = require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});