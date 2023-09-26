"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserRequestSchama = exports.retrieveUsersSchema = exports.createListUserResponseSchema = exports.createUserRequestSchema = void 0;
const zod_1 = require("zod");
exports.createUserRequestSchema = zod_1.z.object({
    name: zod_1.z.string().max(50, "Deve conter no máximo 50 caracteres"),
    password: zod_1.z.string().max(120, "Máximo de 120 caracteres"),
});
exports.createListUserResponseSchema = zod_1.z.object({
    id: zod_1.z.string(),
    name: zod_1.z.string(),
    createdAt: zod_1.z.date(),
    updatedAt: zod_1.z.date(),
});
exports.retrieveUsersSchema = zod_1.z.array(exports.createListUserResponseSchema);
exports.updateUserRequestSchama = exports.createListUserResponseSchema
    .omit({
    createdAt: true,
    updatedAt: true,
})
    .partial();
