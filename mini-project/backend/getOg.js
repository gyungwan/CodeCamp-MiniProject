import axios from "axios";
import cheerio from "cheerio";

//내가 좋아하는 사이트 스크래핑 해오기
export const getOg = async (url) => {
  let ogObj = {};

  const result = await axios.get(url);
  const $ = cheerio.load(result.data);
  $("meta").each((i, el) => {
    if ($(el).attr("property") && $(el).attr("property").includes("og:")) {
      const key = $(el).attr("property");
      const value = $(el).attr("content");
      ogObj[key] = value;
    }
  });

  return ogObj;
};

//입력받은 주민번호 뒷자리만 *찍어주기
export const jumin = async (prefer) => {
  let jumin = prefer.substring(0, 7).padEnd(14, "*");

  return jumin;
};
