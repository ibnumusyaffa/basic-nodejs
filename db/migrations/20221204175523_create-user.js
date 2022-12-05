/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function (knex) {
  return knex.schema.createTable('users', function (table) {
    table.increments('id')
    table.string('uuid').unique().notNullable()
    table.string('name').notNullable()
    table.string('email').notNullable().unique()
    table.string('password').notNullable()
    table.datetime('created_at')
    table.datetime('updated_at')
    table.datetime('deleted_at').nullable()
    table.bigInteger('created_by').nullable()
    table.bigInteger('updated_by').nullable()
    table.bigInteger('deleted_by').nullable()
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('users')
}
