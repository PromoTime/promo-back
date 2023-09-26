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
const errors_1 = require("../../errors");
const app_1 = require("../../app");
const user_schemas_1 = require("../../schemas/user.schemas");
const errors_2 = __importDefault(require("../../errors"));
const updateUserService = (payload, id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield app_1.prisma.user.update({
            where: { id },
            data: Object.assign({}, payload),
        });
        const parsedData = user_schemas_1.updateUserRequestSchama.parseAsync(user);
        return parsedData;
    }
    catch (err) {
        if (err instanceof errors_1.PrismaClientKnownRequestError && err.code === "P2025") {
            throw new errors_2.default("User Not Found", 404);
        }
        throw err;
    }
});
exports.default = updateUserService;
