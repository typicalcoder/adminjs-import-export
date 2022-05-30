"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.csvImporter = void 0;
const tslib_1 = require("tslib");
const csvtojson_1 = tslib_1.__importDefault(require("csvtojson"));
const utils_1 = require("../../utils");
exports.csvImporter = async (csvString, resource) => {
    const records = await csvtojson_1.default().fromString(csvString);
    return utils_1.saveRecords(records, resource);
};
