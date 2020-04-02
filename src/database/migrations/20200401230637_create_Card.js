
exports.up = function(knex) {
    return knex.schema.createTable('Card', function (table)  {
        table.increments();
        table.string('title', 100).notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();
        table.string('photo').notNullable();

        table.string('user_uuid').notNullable();
        table.foreign('user_Uuid').references('Uuid').inTable('user');
    });
};

exports.down = function(knex) {
  return knex.schema.dropTable('user');
};
