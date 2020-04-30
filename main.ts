import { adapter, HttpContext } from "./core/HttpContext";
import HttpRequestConfig from "./core/HttpRequestConfig";
import { HttpMethod } from "./enum/HttpMethod";
import { defaultUrlHandler } from "./handler/HttpUrlHandler";

let url = "https://www.baidu.com";
// let url = "";

const config = new HttpRequestConfig()
  .setUrl({ domain: "www.baidu.com" }) //
  .setMethod(HttpMethod.GET);

const context: HttpContext = {
  config,
  configInterceptor: undefined,
  urlHandler: defaultUrlHandler,
  entityHandler: undefined
};

adapter(context).then(console.log).catch(console.log);
