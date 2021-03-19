exports.up = function(knex) {
  // what should happen run migration
  return Promise.all([
    knex.schema.createTable('papers', function(table) {
      table.increments('id').primary()
      table.string('title')
      table.string('author')

      table.timestamps(true, true)
    }),

    knex.schema.createTable('footnotes', function(table) {
      table.increments('id').primary()
      table.string('note')
      table.integer('paper_id').unsigned()
      table.foreign('paper_id')
        .references('papers.id')

      table.timestamps(true, true)
    })
  ])
}

exports.down = function(knex) {
  // roll back prev version, undo up
  return Promise.all([
    knex.schema.dropTable('footnotes'),
    knex.schema.dropTable('papers')
  ])
}
