module.exports = app => {
    const shops = require("../controllers/shop.controller.js");

    var router = require("express").Router();

    router.post("/", shops.create);

    router.get("/", shops.findAll);

    router.put("/", shops.update);

    router.delete("/", shops.delete);

    app.use("/api/shops", router);
}