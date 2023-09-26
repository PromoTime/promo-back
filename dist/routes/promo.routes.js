"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const middleware_1 = require("../middleware");
const promo_schema_1 = __importStar(require("../schemas/promo.schema"));
const createPromo_controller_1 = __importDefault(require("../controllers/promo/createPromo.controller"));
const listPromos_controller_1 = __importDefault(require("../controllers/promo/listPromos.controller"));
const listUniquePromo_controller_1 = __importDefault(require("../controllers/promo/listUniquePromo.controller"));
const updateAd_controller_1 = __importDefault(require("../controllers/promo/updateAd.controller"));
const deletePromo_controller_1 = __importDefault(require("../controllers/promo/deletePromo.controller"));
const promosRoutes = (0, express_1.Router)();
promosRoutes.post("", middleware_1.validateTokenMiddleware, (0, middleware_1.validateSchemasMiddleware)(promo_schema_1.default), createPromo_controller_1.default);
promosRoutes.get("", listPromos_controller_1.default);
promosRoutes.get("/:id", listUniquePromo_controller_1.default);
promosRoutes.patch("/:id", middleware_1.validateTokenMiddleware, (0, middleware_1.validateSchemasMiddleware)(promo_schema_1.updatePromoRequestSchema), updateAd_controller_1.default);
promosRoutes.delete("/:id", middleware_1.validateTokenMiddleware, deletePromo_controller_1.default);
exports.default = promosRoutes;
