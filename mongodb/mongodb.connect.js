// https://cloud.mongodb.com/v2/
// Database nodejsStudy
// Login: vini
// Senha: 1234
// mongodb+srv://vini:1234@nodejsstudy.mm6vg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

const mongoose = require("mongoose");

async function connect() {
    try{
        await mongoose.connect(
            "mongodb+srv://vini:1234@nodejsstudy.mm6vg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
            { useNewUrlParser: true }
        );
    } catch(err) {
        console.log("Error Connecting MongoDB");
        console.error(err);
    }
}

module.exports = { connect };