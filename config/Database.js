import {Sequelize} from 'sequelize';

const db = new Sequelize('db_sapu', 'root', '',{
    host: "localhost",
    dialect: "mysql"
});

export default db;