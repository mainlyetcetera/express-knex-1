/*
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function() {
      // Inserts seed entries
      return knex('table_name').insert([
        { id: 1, colName: 'rowValue1' },
        { id: 2, colName: 'rowValue2' },
        { id: 3, colName: 'rowValue3' }
      ])
    })
}
*/

exports.seed = function(knex) {
  return knex('footnotes').del() // delete all footnoes
    .then(() => knex('papers').del()) // delete all papers

    // re-insert paper data
    .then(() => {
      return Promise.all([

        // Insert single paper, return paper ID, insert 2 footnotes
        knex('papers').insert({
          title: 'Fooo', author: 'Bob', publisher: 'Minnesota'
        }, 'id')
          .then(paper => {
            return knex('footnotes').insert([
              { note: 'Lorem', paper_id: paper[0] },
              { note: 'Dolor', paper_id: paper[0] }
            ])
          })
          .then(() => console.log('Seeding complete!'))
          .catch(error => console.log(`Error seeding data: ${error}`))
      ]) // end return Promise.all
    })
    .catch(error => console.log(`Error seeding data: ${error}`))
}
