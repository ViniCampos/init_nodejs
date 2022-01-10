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