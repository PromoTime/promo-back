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
const errors_1 = require("../../errors");
const errors_2 = __importDefault(require("../../errors"));
const deleteUserService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield app_1.prisma.user.delete({ where: { id } });
    }
    catch (err) {
        if (err instanceof errors_1.PrismaClientKnownRequestError && err.code === "P2025") {
            throw new errors_2.default("User not found. Verify your token informations", 404);
        }
        throw err;
    }
});
exports.default = deleteUserService;
