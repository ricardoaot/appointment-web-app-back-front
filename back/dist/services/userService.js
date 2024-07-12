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
const credentialService_1 = __importDefault(require("../services/credentialService"));
const data_source_1 = require("../config/data-source");
//DTO: data transfer object
var userTable = [];
const getUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const userTable = yield data_source_1.UserRepository.find();
    return userTable;
});
const getUserById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const userTable = yield data_source_1.UserRepository.findOneOrFail({
        where: { userId: id },
        relations: ["appointments"],
        //
    });
    return userTable;
});
const postLoginUser = (credentialObject) => __awaiter(void 0, void 0, void 0, function* () {
    const { userName, password } = credentialObject;
    const credentialId = yield credentialService_1.default.getValidateCredentials({ userName, password });
    const foundUser = yield data_source_1.UserRepository
        .createQueryBuilder('users')
        .leftJoinAndSelect('users.credential', 'credential')
        .select([
        'users.userId',
        'users.name',
        'users.email',
        'users.birthdate',
        'users.nDni'
    ])
        .where('credential.credentialId = :value', { value: credentialId })
        .getOneOrFail();
    return foundUser;
});
const postCreateUser = (userObject) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, birthdate, nDni } = userObject;
    const credential = yield credentialService_1.default.postCreateCredentials({ userName: email, password: nDni });
    const newUser = {
        name, email, birthdate, nDni
    };
    console.log(newUser);
    const newUserEntity = data_source_1.UserRepository.create(newUser);
    const newUserEntitySaved = yield data_source_1.UserRepository.save(newUserEntity);
    const userFound = yield getUserById(newUserEntitySaved.userId);
    if (userFound) {
        userFound.credential = credential;
        yield data_source_1.UserRepository.save(userFound);
    }
    return newUserEntitySaved;
});
exports.default = { getUsers, getUserById, postCreateUser, postLoginUser };
