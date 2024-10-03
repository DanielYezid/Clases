module.exports = app => {
    const market = require("../controllers/market.controller.js");

    var router = require("express").Router();

    router.post("/", market.create);

    router.get("/", market.findAll);

    router.put("/", market.update);

    router.delete("/", market.delete);

    app.use("/api/markets", router);
}