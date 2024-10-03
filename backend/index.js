const express = require("express");
const cors = require("cors");

const corsOptions = {
    origion : "http://localhost:8100"
}

const app = express();

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const db = require("./models");

db.sequelize.sync().then(() => {
    +
        console.log("dabase already sync")
})

// db.sequelize.sync({ force: true }).then(() => {
//     +
//     console.log("dabase already sync")
// })

app.get("/", (req, res) => {
    return res.json({
        message: "Hola mundazo"
    });
});

require("./routes/market.routes.js")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`The server has just gone online ${PORT}`)
});