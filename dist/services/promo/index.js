"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const createPromo_service_1 = __importDefault(require("./createPromo.service"));
const listPromos_service_1 = __importDefault(require("./listPromos.service"));
const updatePromo_service_1 = __importDefault(require("./updatePromo.service"));
const deletePromo_service_1 = __importDefault(require("./deletePromo.service"));
exports.default = { createPromoService: createPromo_service_1.default, listPromosService: listPromos_service_1.default, updatePromoService: updatePromo_service_1.default, deletePromoService: deletePromo_service_1.default };
