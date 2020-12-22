import axios from "axios";


export default async ({ method = "GET", url, data, headers = null }) => {
    try {
      const result = await axios({
        method,
        url,
        data,
        headers,
      });
      if (result.status <= 400) {
        return result;
      }
      throw new Error(`[${url}] status ${result.status}`);
    } catch (ex) {
      const response = { ...ex };
      throw new Error(`[Fetch error][${url}]: ${ex}`);
    }
  };
  