// Requerir el cliente de mongodb
const MongoClient = require('mongodb').MongoClient;
// Traemos la funcion ObjectId
const ObjectId    = require('mongodb').ObjectID;

// assert es para los tests de lo que devuelve el servicio de mongodb
const assert 	  = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName 	  = 'tienda';
const dbColection = 'productos' 

MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  global.db = client.db(dbName);
  global.collection  = db.collection(dbColection);
});

let DbService = {
	insertProductos: function(db, arr, callback) {

	  // Insert some documents
	  collection.insertMany(arr, function(err, result) {
	    assert.equal(err, null);
	    assert.equal(1, result.result.n);
	    assert.equal(1, result.ops.length);
	    callback(result);
	  });
	}, 
	findProductos: function(db, filter, callback) {

	  // Find some documents
	  collection.find(filter).toArray(function(err, docs) {
	    assert.equal(err, null);
	    console.log(docs);
	    callback(docs);
	  });
	}
}

module.exports = DbService