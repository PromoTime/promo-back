"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePromoRequestSchema = exports.retrievePromosSchema = exports.createListPromoResponseSchema = void 0;
const zod_1 = require("zod");
const createPromoRequestSchema = zod_1.z.object({
    title: zod_1.z.string().max(100, "Deve conter no máximo 100 caracteres"),
    market: zod_1.z.string().max(100, "Deve conter no máximo 100 caracteres"),
    link: zod_1.z.string(),
    price: zod_1.z.number(),
    image: zod_1.z.string(),
});
exports.createListPromoResponseSchema = zod_1.z.object({
    id: zod_1.z.string(),
    title: zod_1.z.string(),
    market: zod_1.z.string(),
    link: zod_1.z.string(),
    image: zod_1.z.string(),
    price: zod_1.z.number(),
    is_active: zod_1.z.boolean(),
    createdAt: zod_1.z.date(),
    updatedAt: zod_1.z.date(),
});
exports.retrievePromosSchema = zod_1.z.array(exports.createListPromoResponseSchema);
exports.updatePromoRequestSchema = createPromoRequestSchema.partial();
exports.default = createPromoRequestSchema;
