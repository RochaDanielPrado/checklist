const dotenv = require('dotenv');
dotenv.config({path: './config/.env'});

//console.log(process.env.DB_HOST , 'teste')

const mysql = require('mysql2');

const connection = mysql.createConnection({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT
});
//console.log(' entrei')
connection.connect((error)=>{
    if(error) throw error;
    console.log(`Conectado ao BD: ${process.env.DB_DATABASE}`)
});

module.exports = connection;