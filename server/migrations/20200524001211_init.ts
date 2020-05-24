import * as Knex from "knex";


export async function up(knex: Knex): Promise<any> {
    return knex.schema.createTable("cars", function (table) {
        table.increments();
        table.string("name").notNullable();
        table.float("x").notNullable();
        table.float("y").notNullable();
        table.timestamp("created_at").defaultTo(knex.fn.now());
        table.timestamp("updated_at").defaultTo(knex.fn.now());
        table.timestamp("deleted_at");
      });
}


export async function down(knex: Knex): Promise<any> {
}

