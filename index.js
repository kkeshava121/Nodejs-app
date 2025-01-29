const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, Babooo Nowww Node.js is running on Ubuntu 22.04!');
});

const PORT = 3000;
const HOST = '0.0.0.0'; // Change from localhost to 0.0.0.0

app.listen(PORT, HOST, () => {
    console.log(`Server is running on http://${HOST}:${PORT}`);
});

