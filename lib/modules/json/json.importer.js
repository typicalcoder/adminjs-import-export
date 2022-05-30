"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonImporter = void 0;
const utils_1 = require("../../utils");
exports.jsonImporter = async (jsonString, resource) => {
    const records = JSON.parse(jsonString);
    return utils_1.saveRecords(records, resource);
};
