import { getToday } from "./utils.js";
import nodemailer from "nodemailer";

export function checkEmail(myEmail) {
  if (myEmail === undefined || myEmail.includes("@") === false) {
    console.log("에러 발생!!! 이메일 주소를 제대로 입력해 주세요!!!");
    return false;
  } else {
    return true;
  }
}

export function getWelcomeTemplate({ name, phone, prefer }) {
  const myTemplate = `
          <html>
              <body>
              <div>
                <h1>${name}님 가입을 환영합니다!!!</h1>
                    <hr/>
                   <div>이름: ${name}</div>
                   <div>전화번호 : ${phone}</div>
                    <div>좋아하는 사이트: ${prefer}</div>
                   <div>가입일: ${getToday()}</div>
                </div>
            </body>
          </html>
      `;
  return myTemplate;
}

export async function sendTemplateToEmail(myEmail, myTemplate) {
  const EMAIL_USER = process.env.EMAIL_USER;
  const EMAIL_PASS = process.env.EMAIL_PASS;
  const EMAIL_SENDER = process.env.EMAIL_SENDER;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASS,
    },
  });

  const result = await transporter.sendMail({
    from: EMAIL_SENDER,
    to: myEmail,
    subject: "스타벅스 가입을 축하합니다",
    html: myTemplate,
  });
}
