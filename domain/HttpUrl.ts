/**
 * https://developer.mozilla.org/zh-CN/docs/Learn/Common_questions/What_is_a_URL
 */
export default interface HttpUrl {
  /**
   * http
   */
  protocol: string;

  /**
   * www.example.com
   */
  domain: string;

  /**
   * 80
   */
  port: number;

  /**
   * /path/.../index.html
   */
  path?: string;

  /**
   *?k1=v1&k2=v2
   */
  parameters?: string;
}
