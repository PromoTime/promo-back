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
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("../../app");
const promo_schema_1 = require("../../schemas/promo.schema");
const listPromosService = (page = 1, pageSize = 12, where) => __awaiter(void 0, void 0, void 0, function* () {
    const offset = (page - 1) * pageSize;
    const promos = yield app_1.prisma.promo.findMany({
        skip: offset,
        take: pageSize,
        where: Object.assign({ is_active: true }, where),
        orderBy: {
            createdAt: "asc",
        }
    });
    const totalPromos = yield app_1.prisma.promo.count();
    const pageCount = Math.ceil(totalPromos / pageSize);
    return {
        data: promo_schema_1.retrievePromosSchema.parse(promos),
        page,
        pageCount,
        total: totalPromos,
    };
});
exports.default = listPromosService;
