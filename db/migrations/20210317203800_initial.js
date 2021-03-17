exports.up = function(knex, Promise) {
  // what should happen run migration
  return Promise.all([
    knex.schema.createTable('papers', function(table) {
      table.increments('id').primary()
      table.string('title')
      table.string('author')

      table.timestamps(true, true)
    }),
  
}

exports.down = function(knex, Promise) {
  // roll back prev version, undo up
}
