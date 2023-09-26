"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateTokenMiddleware = exports.validateSchemasMiddleware = void 0;
const validateSchemas_middleware_1 = __importDefault(require("./validateSchemas.middleware"));
exports.validateSchemasMiddleware = validateSchemas_middleware_1.default;
const validateToken_middleware_1 = __importDefault(require("./validateToken.middleware"));
exports.validateTokenMiddleware = validateToken_middleware_1.default;
