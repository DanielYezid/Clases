const db = require("../models");
const Market = db.market;


exports.create = (req, res) => {
    const market = {
        traderName: req.body.traderName,
        type: req.body.type,
        price: req.body.price,
        madeIn: req.body.madeIn,
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

}
