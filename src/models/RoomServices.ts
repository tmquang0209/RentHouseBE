"use strict";
import { Model } from "objection";
import { Rooms, Services } from ".";

class RoomServices extends Model {
    static get tableName() {
        return "room_services";
    }

    static get jsonSchema() {
        return {
            type: "object",
            required: ["room_id", "service_id"],
            properties: {
                id: { type: "integer" },
                room_id: { type: "integer" },
                service_id: { type: "integer" },
            },
        };
    }

    static relationMappings() {
        return {
            rooms: {
                relation: Model.BelongsToOneRelation,
                modelClass: Rooms,
                join: {
                    from: "room_services.room_id",
                    to: "rooms.id",
                },
            },

            services: {
                relation: Model.BelongsToOneRelation,
                modelClass: Services,
                join: {
                    from: "room_services.service_id",
                    to: "services.id",
                },
            },
        };
    }
}

export default RoomServices;