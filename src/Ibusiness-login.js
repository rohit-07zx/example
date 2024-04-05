import axios from "axios";
import saveAsTxt from "./insert.data.js";

const sleep = async (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

async function requestUrl(Url, headers, terms, startingPoint) {
  let defaultheader = {
    "Content-Type": "application/json",
  };
  if (headers != null) {
    defaultheader = headers;
  }

  const instance = axios.create({
    timeout: 5000,
    headers: defaultheader,
  });

  try {
    let digit = startingPoint;
    let st = "00";
    let newUrl = st + digit;

    for (let i = 1; i < terms; i++) {
      await sleep(2000);
      let response = await instance.get(Url + newUrl);
      i += 2;
      let temp = digit + i;
      newUrl = st + temp;
      console.log(newUrl);
      await saveAsTxt(response.data.Data);
    }
  } catch (e) {
    console.log(e);
  }
  console.log("program ended!");
}

export default requestUrl;
