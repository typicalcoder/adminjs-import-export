"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.xmlExporter = void 0;
const tslib_1 = require("tslib");
const xml_1 = tslib_1.__importDefault(require("xml"));
exports.xmlExporter = (records) => {
    const data = records.map(record => ({
        record: Object.entries(record.params).map(([key, value]) => ({
            [key]: value,
        })),
    }));
    return xml_1.default({ records: data }, {
        indent: '\t',
        declaration: true,
    });
};
