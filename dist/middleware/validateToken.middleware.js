"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const errors_1 = __importDefault(require("../errors"));
const validateTokenMiddleware = (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization)
        throw new errors_1.default("Missing authorization headers", 401);
    const token = authorization.split(" ");
    return jsonwebtoken_1.default.verify(token[1], process.env.SECRET_KEY, (err, decoded) => {
        if (err)
            throw new errors_1.default("Invalid Token", 401);
        if (typeof decoded === "string")
            return;
        req.user = {
            id: decoded.sub,
            email: decoded.email,
        };
        return next();
    });
};
exports.default = validateTokenMiddleware;
