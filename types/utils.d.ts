import { ActionContext, ActionHandler, ActionRequest, ActionResponse, BaseRecord, BaseResource, UploadedFile } from 'adminjs';
import { Importer } from './parsers';
export declare const saveRecords: (records: Record<string, any>[], resource: BaseResource) => Promise<BaseRecord[]>;
export declare const getImporterByFileName: (fileName: string) => Importer;
export declare const postActionHandler: (handler: ActionHandler<ActionResponse>) => ActionHandler<ActionResponse>;
export declare const getFileFromRequest: (request: ActionRequest) => UploadedFile;
export declare const getRecords: (context: ActionContext) => Promise<BaseRecord[]>;
