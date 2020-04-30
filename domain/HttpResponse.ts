import { HttpHeader } from "../enum/HttpHeader";
import HttpOptions from "./HttpOptions";
import { HttpStatus } from "../enum/HttpStatus";
import { XMLHttpRequest } from "xmlhttprequest-ts";

export interface HttpResponse {
  request: XMLHttpRequest;
  options: HttpOptions;

  status: HttpStatus;
  statusText: string;
  headers: HttpHeader;

  text: any;
  xml?: any;
}
