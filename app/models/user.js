const { Model } = require("objection");
const knex = require("./index");
// Person model.
Model.knex(knex);
class User extends Model {
  static get tableName() {
    return "users";
  }
}

module.exports = User;
