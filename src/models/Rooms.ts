"use strict";
import { Model } from "objection";
import { Users, Houses, Services, RoomServices, Renters, Equipment, RoomImages, RoomHistory } from ".";

class Rooms extends Model {
    id: Number;
    house_id: Number;
    name: String;
    max_renters: Number;
    num_of_renters: Number;
    floor: Number;
    status: String;
    square_meter: Number;
    price: Number;
    created_by: Number;
    created_at: Date;

    static get tableName() {
        return "rooms";
    }

    static get jsonSchema() {
        return {
            type: "object",
            required: ["house_id", "name", "price", "created_by"],
            properties: {
                id: { type: "integer" },
                house_id: { type: "integer" },
                name: { type: "string", minLength: 1, maxLength: 50 },
                max_renters: { type: "integer", default: -1 },
                num_of_renters: { type: "integer", default: 0 },
                floor: { type: "integer" },
                square_meter: { type: "integer" },
                description: { type: "string" },
                status: { type: "string", maxLength: 20 },
                price: { type: "integer" },
                created_by: { type: "integer" },
                created_at: { type: "string", format: "date-time" },
            },
        };
    }

    static relationMappings() {
        return {
            users: {
                relation: Model.BelongsToOneRelation,
                modelClass: Users,
                join: {
                    from: "rooms.created_by",
                    to: "users.id",
                },
            },

            houses: {
                relation: Model.BelongsToOneRelation,
                modelClass: Houses,
                join: {
                    from: "rooms.house_id",
                    to: "houses.id",
                },
            },

            services: {
                relation: Model.ManyToManyRelation,
                modelClass: Services,
                join: {
                    from: "rooms.id",
                    through: {
                        from: "room_services.room_id",
                        to: "room_services.service_id",
                    },
                    to: "services.id",
                },
            },

            room_services: {
                relation: Model.HasManyRelation,
                modelClass: RoomServices,
                join: {
                    from: "rooms.id",
                    to: "room_services.room_id",
                },
            },

            renters: {
                relation: Model.HasManyRelation,
                modelClass: Renters,
                join: {
                    from: "rooms.id",
                    to: "renters.room_id",
                },
            },

            equipment: {
                relation: Model.HasManyRelation,
                modelClass: Equipment,
                join: {
                    from: "rooms.id",
                    to: "equipment.room_id",
                },
            },

            room_images: {
                relation: Model.HasManyRelation,
                modelClass: RoomImages,
                join: {
                    from: "rooms.id",
                    to: "room_images.room_id",
                },
            },

            room_history: {
                relation: Model.HasManyRelation,
                modelClass: RoomHistory,
                join: {
                    from: "rooms.id",
                    to: "room_history.room_id",
                },
            },
        };
    }
}

export default Rooms;
