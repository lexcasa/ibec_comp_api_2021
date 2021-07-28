// Agrego MongoDB
const MongoClient = require('mongodb').MongoClient;
const ObjectId    = require('mongodb').ObjectID;
const assert      = require('assert');


// Url de conexiÃ³n con nuestro servidor mongo
// deeplink a: mongodb://
const url = 'mongodb://localhost:27017';
 
// Nombre de la base de datos
const dbName = 'tienda';
 
// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server ::");
 
  global.db = client.db(dbName);
 
  // client.close();
});

// La idea es que cree una funcion para buscar documentos en cualquier colecciÃ³n
const findDocuments = function(db, colName, filter, callback) {
  // Get the documents collection
  const collection = db.collection(colName);
  // Find some documents
  collection.find(filter).toArray( function(err, docs) {
    assert.equal(err, null);
    callback(docs);
  });
}

const insertDocument = function(db, colName, obj, callback) {
  // Get the documents collection
  const collection = db.collection(colName);
  // Insert some documents
  collection.insertMany([obj], function(err, result) {
    assert.equal(err, null);
    assert.equal(1, result.result.n);
    assert.equal(1, result.ops.length);
    console.log("Inserted 1 documents into the collection");
    callback(result);
  });
}

const updateDocument = function(db, colName, id, obj, callback) {
  // Get the documents collection
  const collection = db.collection(colName);

  // Al objeto: Eliminamos la id
  delete obj._id

  // Update document where a is 2, set b equal to 1
  collection.updateOne({ _id : ObjectId(id) }
    , { $set: obj }, function(err, result) {
    assert.equal(err, null);
    // assert.equal(1, result.result.n);
    console.log("Updated the document");
    callback(result);
  });
}

const removeDocument = function(db, colName, id, callback) {
  // Get the documents collection
  const collection = db.collection(colName);

  // Delete document where a is 3
  collection.deleteOne({ _id: ObjectId(id) }, function(err, result) {
    try {
      assert.equal(err, null);
      assert.equal(1, result.result.n);
      console.log("Removed the document with the field a equal to 3");
      callback(result);
    } catch (e){
      callback(e)
    }
    
  });
}

module.exports = {
	findDocuments: findDocuments,
	insertDocument: insertDocument,
	updateDocument: updateDocument,
	removeDocument: removeDocument
}