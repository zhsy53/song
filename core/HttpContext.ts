import { XMLHttpRequest } from "xmlhttprequest-ts";
import { HttpResponse } from "../domain/HttpResponse";
import { AbortError, ErrorError, TimeoutError } from "../enum/HttpError";
import { HttpHeader } from "../enum/HttpHeader";
import { HttpMethod } from "../enum/HttpMethod";
import { HttpEntityHandler } from "../handler/HttpEntityHandler";
import { HttpUrlHandler } from "../handler/HttpUrlHandler";
import HttpRequestConfig from "./HttpRequestConfig";
import { HttpRequestConfigInterceptor } from "./HttpRequestConfigInterceptor";

export interface HttpContext {
  config: HttpRequestConfig;
  configInterceptor?: HttpRequestConfigInterceptor;
  urlHandler: HttpUrlHandler;
  entityHandler?: HttpEntityHandler;
}

export const adapter = (context: HttpContext): Promise<HttpResponse> => {
  return new Promise((resolve, reject) => {
    console.log("context => ", context);
    let { config, configInterceptor, urlHandler, entityHandler } = context;

    console.log("url => ", config.url);

    if (configInterceptor) {
      config = configInterceptor(config);
    }

    // const url = urlHandler(config.url);

    console.log("url => ", config.url);

    const entity = entityHandler && entityHandler(config.entity);

    const xhr = new XMLHttpRequest();

    // options
    xhr.timeout = config.options.timeout;
    xhr.withCredentials = config.options.withCredentials;

    const url = urlHandler(config.url);
    console.log("url => ", url);

    xhr.open(HttpMethod[config.method], url, true);

    xhr.onreadystatechange = () => {
      const state = xhr.readyState;

      console.log("state => ", state);
      console.log("status => ", xhr.status);

      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 0) {
          console.log("不知道发生了什么"); //TODO
          return;
        }

        const response: HttpResponse = {
          request: xhr,
          options: config.options,

          status: xhr.status,
          statusText: xhr.statusText,
          headers: xhr.getAllResponseHeaders() as HttpHeader,

          text: xhr.responseText,
          xml: xhr.responseXML
        };

        resolve(response);
      }
    };

    xhr.onabort = () => reject(AbortError.of());
    xhr.onerror = (e) => reject(ErrorError.of(e.message));
    xhr.ontimeout = () => reject(TimeoutError.of());

    xhr.send(entity);
  });
};
