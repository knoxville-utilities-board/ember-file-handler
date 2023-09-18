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

export type ResponseData = ArrayBuffer | Blob | Document | object | string;
export type ResponseType = XMLHttpRequestResponseType;
