// Fill in areas once dataypes from API are concrete -Kaimar
const express = require('express');
const mongoose = require('mongoose'); //mongodb databases
<<<<<<< HEAD
const skiData= require('../scraping/skiDataScraper.js')

const Registration = mongoose.model('Registration');
=======
const skiData= require('../Scraping/skiDataScraper.js')

const User = require('../models/Registration');
>>>>>>> 243d6a77e19a22e70562ae8bf6200876b38aa8ce

const router = express.Router();

router.get('/', (req, res) => {
	skiData("https://www.onthesnow.com/colorado/loveland/skireport.html").then((cond) => {
		res.render('viewSkiData', {cond});
	}).catch(() => {res.send('Sorry! Something went wrong.');})
});
module.exports = router;
