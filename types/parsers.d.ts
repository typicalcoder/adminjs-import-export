import { BaseRecord, BaseResource } from 'adminjs';
import { ExporterType } from './exporter.type';
export declare type Exporter = (records: BaseRecord[]) => string;
export declare type Importer = (records: string, resource: BaseResource) => Promise<BaseRecord[]>;
export declare const Parsers: Record<ExporterType, {
    export: Exporter;
    import: Importer;
}>;
