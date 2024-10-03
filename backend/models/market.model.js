module.exports = (sequelize, Sequelize) => {
    const Market = sequelize.define("market", {
        traderName: {
            type: Sequelize.STRING,
            allowNull: false
        },
        type: {
            type: Sequelize.STRING
        },
        price: {
            type: Sequelize.FLOAT,
            isNumeric: true
        },
        sellFrom: {
            type: Sequelize.STRING
        }
    })

    return Market;
}