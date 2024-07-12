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
var credentialTable = [];
const postCreateCredentials = (credentialObject) => __awaiter(void 0, void 0, void 0, function* () {
    const { userName, password } = credentialObject;
    const newCredential = { userName, password };
    data_source_1.CredentialRepository.create(newCredential);
    const credentialSaved = yield data_source_1.CredentialRepository.save(newCredential);
    return credentialSaved;
});
const getValidateCredentials = (credentialObject) => __awaiter(void 0, void 0, void 0, function* () {
    const { userName, password } = credentialObject;
    const credential = yield data_source_1.CredentialRepository.findOneBy({ userName, password });
    return credential === null || credential === void 0 ? void 0 : credential.credentialId;
});
exports.default = { postCreateCredentials, getValidateCredentials };
