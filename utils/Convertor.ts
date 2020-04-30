export default interface Convertor<T = any, R = any> {
  (t: T): R;
}
