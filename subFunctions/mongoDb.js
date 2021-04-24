module.exports = {mongodb}
function mongodb(host) {
    var MongoClient = require('mongodb').MongoClient;
    return {
        query: function (database, collection, options, query) {
            return new Promise((resolve, reject) => {
                MongoClient.connect(host, options, function (err, db) {
                    if (err) reject(err);
                    var dbo = db.db(database);
                    dbo.collection(collection).find(query).toArray(function (err, result) {
                        if (err) reject(err);
                        resolve(result);
                        db.close();
                    });
                });
            })
        },
        insert: function (database, collection, options, data) {
            return new Promise((resolve, reject) => {
                MongoClient.connect(host, options, function (err, db) {
                    if (err) reject(err);
                    var dbo = db.db(database);
                    dbo.collection(collection).insertOne(data, function (err, res) {
                        if (err) reject(err);
                        resolve(res);
                        db.close();
                    });
                });
            })
        }
    }
}
