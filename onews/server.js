const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'www')));

app.use('*', (req, res) => {
    res.sendFile('index.html', {root: path.join(__dirname, 'www')});
})

const PORT = process.env.PORT || 9100
app.listen(PORT, () => {
    console.log('=======================')
    console.log('STARTED ON PORT:' + PORT)
    console.log('=======================')  
});

// cd /angular-ionic-news-app/onews
// node server.js