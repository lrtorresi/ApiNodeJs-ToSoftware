
exports.up = function (knex) {
    return knex.schema.createTable('User', function (table)  {
        table.increments();
        table.string('Uuid').notNullable();
        table.string('Nome', 150).notNullable();
        table.string('Cpf', 20).notNullable();
        table.string('Email', 100).notNullable();
        table.string('Password', 100).notNullable();
    });
};

exports.down = function (knex) {
return knex.schema.droptable(User);
};
