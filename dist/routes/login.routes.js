"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const middleware_1 = require("../middleware");
const login_schema_1 = __importDefault(require("../schemas/login.schema"));
const login_1 = __importDefault(require("../controllers/login"));
const loginRoute = (0, express_1.Router)();
loginRoute.post("", (0, middleware_1.validateSchemasMiddleware)(login_schema_1.default), login_1.default);
exports.default = loginRoute;
