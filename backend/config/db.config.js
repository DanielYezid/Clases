module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "Alumno2425",
    DB: "market",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}