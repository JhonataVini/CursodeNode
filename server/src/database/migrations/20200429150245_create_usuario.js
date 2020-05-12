
exports.up = function(knex) {
    return knex.schema.createTable('usuario', function (table) {
        table.increments();
        table.string('nome').notNullable();
        table.string('numero',15).notNullable();
        table.string('numchip',15).notNullable();
        table.string('dtexp',15).notNullable();
        table.string('dtpag',15).notNullable();
        table.string('status').notNullable();

        table.string('login_id').notNullable();

        table.foreign('login_id').references('id').inTable('login');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('usuario');
};
