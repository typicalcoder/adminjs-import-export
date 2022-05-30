import { FC } from 'react';
import { ActionProps } from 'adminjs';
import { ExporterType } from '../exporter.type';
export declare const mimeTypes: Record<ExporterType, string>;
export declare const getExportedFileName: (extension: string) => string;
declare const ExportComponent: FC<ActionProps>;
export default ExportComponent;
