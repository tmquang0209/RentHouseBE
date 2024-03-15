require("dotenv").config();

module.exports = {
    development: {
        client: "mysql",
        connection: {
            host: process.env.MYSQL_HOST,
            user: process.env.MYSQL_USERNAME,
            password: process.env.MYSQL_PASSWORD,
            database: process.env.MYSQL_DATABASE,
        },
    },
};
