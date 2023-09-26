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
const bcryptjs_1 = require("bcryptjs");
const app_1 = require("../../app");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const errors_1 = __importDefault(require("../../errors"));
const loginService = ({ name, password }) => __awaiter(void 0, void 0, void 0, function* () {
    const query = yield app_1.prisma.user.findFirst({
        where: {
            name: name
        }
    });
    if (!query)
        throw new errors_1.default("User not found", 404);
    const compare = (0, bcryptjs_1.compareSync)(password, query.password);
    if (!compare)
        throw new errors_1.default("Incorret password", 409);
    const token = jsonwebtoken_1.default.sign({ name: query.name }, process.env.SECRET_KEY, {
        expiresIn: "1h",
        subject: query.id,
    });
    return `${token}`;
});
exports.default = loginService;
