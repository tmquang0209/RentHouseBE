import { knexSnakeCaseMappers } from "objection";
import type { Knex } from "knex";

// Update with your config settings.

const config: { [key: string]: Knex.Config } = {
    development: {
        client: "mysql",
        connection: {
            database: "renthouse",
            user: "tmq",
            password: "Matkhau123@@",
        },
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            tableName: "knex_migrations",
        },
        ...knexSnakeCaseMappers(),
    },

    staging: {
        client: "mysql",
        connection: {
            database: "renthouse",
            user: "tmq",
            password: "Matkhau123@@",
        },
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            tableName: "knex_migrations",
        },
    },

    production: {
        client: "mysql",
        connection: {
            database: "renthouse",
            user: "tmq",
            password: "Matkhau123@@",
        },
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            tableName: "knex_migrations",
        },
    },
};

export default config;
