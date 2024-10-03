const db = require("../models");
const Market = db.market;


exports.create = (req, res) => {
    const market = {
        traderName: req.body.traderName,
        type: req.body.type,
        price: req.body.price,
        sellFrom: req.body.sellFrom,
    }

    Market.create(market).then((data) => {
        res.send(data);
    })
}


exports.findAll = (req, res) => {
    Market.findAll().then((data) => {
        res.send(data);
    })
}

exports.findOne = (req, res) => {

}

exports.update = (req, res) => {

}

exports.delete = (req, res) => {
    const id = req.params.id;
    Market.destroy({ where: { id: id } }).then(() => {
        console.log("Entry erased");
        res.send({ message: "Erased." });
    })
}
