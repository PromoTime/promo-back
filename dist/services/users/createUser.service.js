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
const bcryptjs_1 = require("bcryptjs");
const user_schemas_1 = require("../../schemas/user.schemas");
const createUserService = (user) => __awaiter(void 0, void 0, void 0, function* () {
    // const findUser = await prisma.user.findFirst({
    //   where:{
    //    name:  user.name
    //   }
    // })
    // if(findUser){
    //   throw new AppError("User already exist", 409)
    // }
    const newUser = yield app_1.prisma.user.create({
        data: Object.assign(Object.assign({}, user), { password: (0, bcryptjs_1.hashSync)(user.password, 12) }),
    });
    return user_schemas_1.createListUserResponseSchema.parse(newUser);
});
exports.default = createUserService;
