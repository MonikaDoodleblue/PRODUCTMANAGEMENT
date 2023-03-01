exports.up = function (knex) {
    return knex.schema.createTable('orderstatustable', function (table) {
        table.increments('id').primary();
        table.string('name');
        table.string('email');
        table.string('password');
        table.timestamps(true, true);
    });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('orderstatustable');
};