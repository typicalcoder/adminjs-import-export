"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exportHandler = void 0;
const parsers_1 = require("./parsers");
const utils_1 = require("./utils");
exports.exportHandler = async (request, response, context) => {
    var _a, _b;
    const parser = parsers_1.Parsers[(_b = (_a = request.query) === null || _a === void 0 ? void 0 : _a.type) !== null && _b !== void 0 ? _b : 'json'].export;
    const records = await utils_1.getRecords(context);
    const parsedData = parser(records);
    return {
        exportedData: parsedData,
    };
};
