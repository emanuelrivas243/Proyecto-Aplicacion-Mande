const { Pool } = require('pg'); //Conecta a la base de datos en Postgres

const pool = new Pool({
  user: 'postgres',
  password: 'link2431',
  host: 'localhost',
  port: 5432,
  database: 'mandeapp'
})

module.exports = pool;