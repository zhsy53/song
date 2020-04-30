import HttpUrl from "../domain/HttpUrl";
import Convertor from "../utils/Convertor";
import { defaultParameterHandler } from "./HttpParameterHandler";

export type HttpUrlHandler = Convertor<HttpUrl, string>;

export const defaultUrlHandler: HttpUrlHandler = (url: HttpUrl) => {
  const p = defaultParameterHandler(url.parameters);
  return url.protocol + "://" + url.domain + ":" + url.port + (p ? "?" + p : "");
};
