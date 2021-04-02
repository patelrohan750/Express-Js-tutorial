const express = require('express');
const path = require('path');
const app = express();
const hbs = require('hbs');
const requests = require('requests');

const staticPath = path.join(__dirname, '../public');
const templatePath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

//to set the view engine
app.set('view engine', 'hbs');
app.set('views', templatePath);
hbs.registerPartials(partialsPath);

//built in middleware
app.use(express.static(staticPath));
//templete engine route
app.get('/', (req, res) => {
	res.render('index');
});
app.get('/about', (req, res) => {
	res.render('about');
});

app.get('/', (req, res) => {
	res.end('Hello World From the Express');
});
app.get('*', (req, res) => {
	res.render('404', {
		errorcomemnt: 'oops Page Not Found'
	});
});
app.listen(8000, 'localhost', () => {
	console.log('listing the port at 8000');
});
