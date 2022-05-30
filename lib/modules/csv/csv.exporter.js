"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.csvExporter = void 0;
const json2csv_1 = require("json2csv");
exports.csvExporter = (records) => {
    return json2csv_1.parse(records.map(r => r.params));
};
