export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
export type RequestData =
  | Record<string, unknown>
  | Array<unknown>
  | Blob
  | File
  | ArrayBuffer
  | FormData
  | Promise<RequestData>
  | (() => RequestData | Promise<RequestData>);
export type TransformedRequestData = XMLHttpRequestBodyInit | null | undefined;

export type FileTransfer = {
  isUpload: boolean;
  isProcessing: boolean;
  isSuccessful: boolean;
  progress: number;
  loaded: number;
  total: number;
  response: ResponseData | null | undefined;
  withHeader(key: string, value: string): FileTransfer;
  withQueryParams(
    params: URLSearchParams | Record<string, string> | null
  ): FileTransfer;
  withData(data: RequestData): FileTransfer;
  withResponseType(type: ResponseType): FileTransfer;
  abort(): void;
  preview: string | URL | RequestData | null | undefined;
  begin(): Promise<ResponseData | null | void>;
};
export type FileTransferOptions = {
  method?: HttpMethod;
};
export type ResponseData = ArrayBuffer | Blob | Document | object | string;
export type ResponseType = XMLHttpRequestResponseType;
