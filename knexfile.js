module.exports = {
  development: {
    client: 'pg',
    connection: {
      user: 'postgres',
      password: 'moneK324',
      filename: 'postgres://localhost/publications',
    },
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds/dev'
    },
    useNullAsDefault: true
  }
}
