import zlib from 'zlib';

export interface GlobalOptions {
  verbose?: boolean;
  incremental?: boolean;
  exclude?: string[];
  include?: string[];
  threshold: number;
  level?: number;
  memoryLevel?: number;
  strategy?: number;
  deflate?: boolean;
  brotli?: boolean;
  brotliParamMode?: string;
  brotliQuality?: number;
  brotliSizeHint?: number;
  outputFileFormat?: string;
  [key: string]: unknown;
}

export type CompressionOptions = {
  level?: number;
  memoryLevel?: number;
  strategy?: number;
} & zlib.ZlibOptions;

export type BrotliOptions = { [key: number]: number };

export interface CompressedFile {
  beforeSize: number;
  afterSize: number;
  isCached: boolean;
}

export interface Purge {
  purge(): Promise<void>;
}

export interface FileConfig {
  incremental?: IncrementalConfig;
  version: string;
}

export interface IncrementalConfig {
  files: { [path: string]: { checksum: string; fileId: string } };
}
