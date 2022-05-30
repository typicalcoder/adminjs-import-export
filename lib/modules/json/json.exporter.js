"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonExporter = void 0;
exports.jsonExporter = (records) => {
    return JSON.stringify(records.map(r => r.params));
};
