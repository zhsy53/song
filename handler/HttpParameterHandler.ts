import Convertor from "../utils/Convertor";

export type HttpParameterHandler = Convertor<any, string>;

export const defaultParameterHandler: HttpParameterHandler = (data: any) => {
  if (typeof URLSearchParams !== undefined && data instanceof URLSearchParams) {
    return data.toString();
  }

  if (data === null || data == undefined) {
    return "";
  }

  if (data instanceof Object) {
    let arr = [];
    for (const key in data) {
      let value;
      const v = data[key];
      if (Array.isArray(v)) {
        value = v.map((i) => key + "=" + i).join("&");
      } else {
        value = key + "=" + v;
      }
      arr.push(value);
    }
    // return Object.entries(data)
    //   .map((key, value) => {
    //     console.log(key, value, " => ", Array.isArray(value));
    //     const v = Array.isArray(value) ? value.map((v) => key + "=" + v).join("&") : value;
    //     console.log(v);
    //     return key + "=" + v;
    //   })
    //   .join("&");

    // for (const key in data) {

    // }

    return arr.join("&");
  }

  return "";
};

const o = { name: "abc", age: [1, 2, 3] };
const r = defaultParameterHandler(o);
console.log(r);
