"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.importHandler = void 0;
const tslib_1 = require("tslib");
const utils_1 = require("./utils");
const util_1 = tslib_1.__importDefault(require("util"));
const fs_1 = tslib_1.__importDefault(require("fs"));
const readFile = util_1.default.promisify(fs_1.default.readFile);
exports.importHandler = async (request, response, context) => {
    const file = utils_1.getFileFromRequest(request);
    if (file.name !== null) {
        const importer = utils_1.getImporterByFileName(file.name);
        const fileContent = await readFile(file.path);
        await importer(fileContent.toString(), context.resource);
    }
    return {};
};
