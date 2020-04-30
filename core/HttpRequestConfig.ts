import HttpCookie from "../domain/HttpCookie";
import HttpOptions from "../domain/HttpOptions";
import HttpUrl from "../domain/HttpUrl";
import { HttpHeader } from "../enum/HttpHeader";
import { HttpMethod } from "../enum/HttpMethod";
import { Partial } from "../utils/Partial";

export default class HttpRequestConfig {
  url: HttpUrl = { protocol: "http", domain: "", port: 80 };
  method: HttpMethod = HttpMethod.GET;
  options: HttpOptions = { timeout: 0, withCredentials: false };
  header: HttpHeader = {};
  cookie: HttpCookie = {};
  entity: any = undefined;

  public setUrl = (url: Partial<HttpUrl>) => {
    this.url = Object.assign({}, this.url, url);
    return this;
  };

  public setMethod = (method: HttpMethod) => {
    this.method = method;
    return this;
  };

  public setOptions = (setting: Partial<HttpOptions>) => {
    this.options = Object.assign({}, this.options, setting);
    return this;
  };
  // public timeout = (timeout: number) => this.setOptions({ timeout });
  // public credentials = (credentials: boolean = true) => this.setOptions({ withCredentials: credentials });

  public setHeader = (header: HttpHeader) => {
    this.header = header;
    return this;
  };

  public setCookies = (cookie: HttpCookie) => {
    this.cookie = cookie;
    this;
  };

  public setEntity = (entity: any) => {
    this.entity = entity;
    return this;
  };
}
