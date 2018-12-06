// Author: Kamiar Coffey & Matthew Skogen
// script to determine if a new API pull is needed

// Takes as input - currentl user prefs - time of last pull from API - use mongoDB dataCache

// db.DataCacheAPI.find(query, projection)

// var record = db.data.findOne();
// var localNow = new Date( record.date.getTime() -  ( record.offset * 60000 ) );


// MongoClient mongo = new MongoClient( "localhost" , 27017 );
// DB db = mongo.getDB(dbName);
// DBCollection collection = db.getCollection(collectionName);
//
// BasicDBObject whereQuery = new BasicDBObject();
// whereQuery.put("movie_id", id);
//
// DBObject document = collection.findOne(whereQuery);
// BasicDBList list = (BasicDBList) document.get("genre");
//
// List<String> res = new ArrayList<String>();
//
// for(Object el: list) {
//      res.add((String) el);
// }

// Fill in areas once dataypes from API are concrete -Kaimar

const express = require('express');
const mongoose = require('mongoose'); //mongodb databases

const router = express.Router();

//POST for updating
router.post('/', function (req, res, next){
	if (req) {
		currentUser = req.session.userId;
			User.replaceOne(
				 { email: currentUser },
				 { preferred_snowType: snowConditionsRange }, //string
				 { preferred_travelTime: trafficRange }, //boolean
				 { preferred_temperature: weatherRange } //string
			)
    };
});

module.exports = router;
