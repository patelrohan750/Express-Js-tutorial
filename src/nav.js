const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
	res.write('<h1>welcome to home page</h1>');
	res.send();
});

app.get('/about', (req, res) => {
	res.send('<h1>welcome to about page</h1>');
});

app.get('/contact', (req, res) => {
	res.send('welcome to contact page');
});

app.listen(port, () => {
	console.log(`listening to server at ${port}`);
});
