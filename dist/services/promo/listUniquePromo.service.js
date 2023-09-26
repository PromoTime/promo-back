"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("../../app");
const errors_1 = __importDefault(require("../../errors"));
const listUniquePromoService = (findId) => __awaiter(void 0, void 0, void 0, function* () {
    const promo = yield app_1.prisma.promo.findUnique({
        where: {
            id: findId,
            is_active: true
        }
    });
    if (!promo) {
        throw new errors_1.default("Promo not found", 404);
    }
    return promo;
});
exports.default = listUniquePromoService;
