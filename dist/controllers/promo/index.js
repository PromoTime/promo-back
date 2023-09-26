"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const createPromo_controller_1 = __importDefault(require("./createPromo.controller"));
const listPromos_controller_1 = __importDefault(require("./listPromos.controller"));
const deletePromo_controller_1 = __importDefault(require("./deletePromo.controller"));
const listUniquePromo_controller_1 = __importDefault(require("./listUniquePromo.controller"));
const updateAd_controller_1 = __importDefault(require("./updateAd.controller"));
exports.default = { createPromoController: createPromo_controller_1.default, listPromosController: listPromos_controller_1.default, deletePromoController: deletePromo_controller_1.default, listUniquePromoController: listUniquePromo_controller_1.default, updatePromoController: updateAd_controller_1.default };
