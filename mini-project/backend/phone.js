import coolsms from "coolsms-node-sdk";
const mysms = coolsms.default;

export const checkPhone = function (myPhone) {
  if (myPhone.length < 10 || myPhone.length > 11) {
    console.log("에러 발생!! 핸드폰 번호를 제대로 입력해주세요.");
    return false; //함수종료  이 함수만 종료됨
  } else {
    return true;
  }
};

export const getToken = function () {
  const result = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
  console.log(result);
  return result;
};

//실제 요청부분으로 바껴야함 사이트 들어가서 연습을 진행
export async function sendTokenToSMS(myphone, mytoken) {
  //   const SMS_KEY = process.env.SMS_KEY;
  //   const SMS_SECRET = process.env.SMS_SECRET;
  //   const SMS_SENDER = process.env.SMS_SENDER;
  //   const messageService = new mysms(SMS_KEY, SMS_SECRET);
  //   const result = await messageService.sendOne({
  //     to: myphone,
  //     from: SMS_SENDER,
  //     text: `[코드캠프] 안녕하세요?1 요청하신 인증번호는 ${mytoken}입입니다.`,
  //   });
  //   console.log(result);
  //   console.log(myphone + "번호로 인증번호" + result + "를 전송합니다.");
}
