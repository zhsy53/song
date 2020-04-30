// TODO
/**
 * https://tools.ietf.org/html/rfc2109#section-4.3.4
 */
export enum HeaderName {
  ACCEPT = "Accept",
  ACCEPT_CHARSET = "Accept-Charset",
  ACCEPT_ENCODING = "Accept-Encoding",
  CONTENT_TYPE = "Content-Type"
}

export type HttpHeader = {
  [key in HeaderName]?: string;
  // [key in keyof typeof HeaderName]: string;
};
