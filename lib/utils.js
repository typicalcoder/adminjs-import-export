"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRecords = exports.getFileFromRequest = exports.postActionHandler = exports.getImporterByFileName = exports.saveRecords = void 0;
const adminjs_1 = require("adminjs");
const json_importer_1 = require("./modules/json/json.importer");
const csv_importer_1 = require("./modules/csv/csv.importer");
const xml_importer_1 = require("./modules/xml/xml.importer");
exports.saveRecords = async (records, resource) => {
    return Promise.all(records.map(async (record) => {
        try {
            return await resource.create(record);
        }
        catch (e) {
            console.error(e);
            return e;
        }
    }));
};
exports.getImporterByFileName = (fileName) => {
    if (fileName.includes('.json')) {
        return json_importer_1.jsonImporter;
    }
    if (fileName.includes('.csv')) {
        return csv_importer_1.csvImporter;
    }
    if (fileName.includes('.xml')) {
        return xml_importer_1.xmlImporter;
    }
    throw new Error('No parser found');
};
exports.postActionHandler = (handler) => async (request, response, context) => {
    if (request.method !== 'post') {
        return {};
    }
    return handler(request, response, context);
};
exports.getFileFromRequest = (request) => {
    var _a;
    const file = (_a = request.payload) === null || _a === void 0 ? void 0 : _a.file;
    if (!(file === null || file === void 0 ? void 0 : file.path)) {
        throw new adminjs_1.ValidationError({
            file: { message: 'No file uploaded' },
        });
    }
    return file;
};
exports.getRecords = async (context) => {
    var _a, _b, _c, _d;
    const idProperty = (_b = (_a = context.resource
        .properties()
        .find(p => p.isId())) === null || _a === void 0 ? void 0 : _a.name) === null || _b === void 0 ? void 0 : _b.call(_a);
    const titleProperty = (_d = (_c = context.resource.decorate().titleProperty()) === null || _c === void 0 ? void 0 : _c.name) === null || _d === void 0 ? void 0 : _d.call(_c);
    return context.resource.find(new adminjs_1.Filter({}, context.resource), {
        limit: Number.MAX_SAFE_INTEGER,
        sort: {
            sortBy: idProperty !== null && idProperty !== void 0 ? idProperty : titleProperty,
            direction: 'asc',
        },
    });
};
