import axios from "axios";

axios
  .get("https://www.baidu.com", { timeout: 1001 })
  .then((r) => console.log(r.status))
  .catch(console.log);
