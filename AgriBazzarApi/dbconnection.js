var mongodb  = require('mongodb')
function connection(callback){
    var MongoClient = mongodb.MongoClient;
    var url = "mongodb+srv://admin:AdminUser123@cluster0.i5gbr.mongodb.net/AgriBazzar?retryWrites=true&w=majority";
    MongoClient.connect(url, callback)
}

module.exports = connection