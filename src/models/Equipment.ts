"use strict";
import { Model } from "objection";
import { Houses, Users, EquipmentHistory } from ".";

class Equipment extends Model {
    static get tableName() {
        return "equipment";
    }

    static get jsonSchema() {
        return {
            type: "object",
            required: ["house_id", "name", "exp_date", "created_by"],
            properties: {
                id: { type: "integer" },
                house_id: { type: "integer" },
                name: { type: "string", minLength: 1, maxLength: 50 },
                quantity: { type: "integer", default: 1 },
                status: { type: "string", maxLength: 50 },
                shared_type: { type: "string", maxLength: 10 },
                exp_date: { type: "date" },
                description: { type: "string" },
                created_by: { type: "integer" },
                created_at: { type: "datetime" },
            },
        };
    }

    static relationMappings() {
        return {
            users: {
                relation: Model.BelongsToOneRelation,
                modelClass: Users,
                join: {
                    from: "equipment.created_by",
                    to: "users.id",
                },
            },

            houses: {
                relation: Model.BelongsToOneRelation,
                modelClass: Houses,
                join: {
                    from: "equipment.house_id",
                    to: "houses.id",
                },
            },

            equipment_history: {
                relation: Model.HasManyRelation,
                modelClass: EquipmentHistory,
                join: {
                    from: "equipment.id",
                    to: "equipment_history.equipment_id",
                },
            },
        };
    }
}

export default Equipment;
