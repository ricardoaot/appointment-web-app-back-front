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
const data_source_1 = require("../config/data-source");
const preloadUserData = [
    {
        "name": "pepito",
        "email": "pepito@pepito.com",
        "birthdate": "12-10-2010",
        "nDni": "1234"
    }
];
const preloadUserFunction = () => __awaiter(void 0, void 0, void 0, function* () {
    const queryRunner = data_source_1.AppDataSource.createQueryRunner();
    try {
        yield queryRunner.connect();
        yield queryRunner.startTransaction();
        const userFound = yield data_source_1.UserRepository.find();
        if (userFound.length > 0) {
            console.log("users already created");
            return;
        }
        const promiseUser = preloadUserData.map((user) => __awaiter(void 0, void 0, void 0, function* () {
            const newUser = data_source_1.UserRepository.create(user);
            yield queryRunner.manager.save(newUser);
        }));
        yield Promise.all(promiseUser);
        yield queryRunner.commitTransaction();
    }
    catch (error) {
        yield queryRunner.rollbackTransaction();
    }
    finally {
        yield queryRunner.release();
    }
});
exports.default = preloadUserFunction;
