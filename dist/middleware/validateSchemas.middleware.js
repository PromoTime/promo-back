"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const validateSchemasMiddleware = (schema) => (req, res, next) => {
    try {
        req.body = schema.parse(req.body);
        return next();
    }
    catch (err) {
        if (err instanceof zod_1.z.ZodError) {
            return res.status(400).json({ errors: err.flatten().fieldErrors });
        }
    }
};
exports.default = validateSchemasMiddleware;
