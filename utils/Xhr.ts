import { XMLHttpRequest } from "xmlhttprequest-ts";

const xhr = new XMLHttpRequest();

let url = "https://www.google.com";
url = "https://www.baidu.com";
xhr.open("GET", url, true);

// xhr.timeout = 100;
xhr.withCredentials = false;
xhr.onreadystatechange = () => {
  const state = xhr.readyState;
  console.log("state => ", state);
  console.log("status => ", xhr.status);

  if (xhr.readyState === XMLHttpRequest.DONE) {
    // console.log(xhr.status);

    // console.log(xhr.responseText);

    // console.log("----------");

    // console.log(xhr.responseXML);

    if (xhr.status === 0) {
      return;
    }

    console.log("status -> ", xhr.status);
    console.log("status text -> ", xhr.statusText);

    console.log("response -> ", xhr.responseText);
  }
};

xhr.onabort = () => console.log("abort!!!");

xhr.onerror = (e) => console.log("onerror -> " + e);

xhr.onload = () => console.log("onload");

xhr.onloadend = () => console.log("onloadend");

xhr.onloadstart = () => console.log("onloadstart");

xhr.ontimeout = () => console.log("ontimeout");

xhr.send();
