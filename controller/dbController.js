let mongo = require('mongodb');
let {MongoClient} = mongo;
let mongoUrl = "mongodb+srv://admin_01:56aqabCTxpDSFGzV@cluster0.fw41pmb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

let client = new MongoClient(mongoUrl);

async function dbConnect() {
    await client.connect();
}

let db = client.db('novacart');

async function getData(colName,query) {
    let output = [];
    try{
        const cursor = db.collection(colName).find(query);
        for await(const data of cursor){
            output.push(data);
        }
        cursor.close()
    }catch(error){
        console.error("Error details:", error.message);
    }
    return output;
}

async function postData(colName,data){
    let output;
    try{
        output = await db.collection(colName).insertOne(data)
    }catch(error){
        console.error("Error derails:",error.message)
    }
    return output
}

module.exports = {
    dbConnect, 
    getData,
    postData
}
