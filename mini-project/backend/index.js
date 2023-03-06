import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import { options } from "./swagger/config.js";
import cors from "cors";
import { getToken, sendTokenToSMS } from "./phone.js";
import { getWelcomeTemplate, sendTemplateToEmail } from "./email.js";
import mongoose from "mongoose";
// //
import "dotenv/config";
import { User } from "./models/userSchema.js";
import { Token } from "./models/phoneSchema.js";
import { getOg, jumin } from "./getOg.js";

const app = express();
app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(options)));
app.use(cors());

//회원가입 api
app.post("/users", async (req, res) => {
  //유저정보를 변수에 할당
  const { name, email, personal, prefer, pwb, phone } = req.body;
  //유저가 좋아하는 사이트를 og정보만 빼와서 변수에 저장
  const ogObj = await getOg(prefer);

  //유저의 폰번호가
  const findToken = await Token.findOne({ phone: req.body.phone });
  console.log(findToken);
  if (!findToken || findToken.isAuth === "false") {
    res.send("에러!! 핸드폰번호가 인증되지 않았습니다.").status(422); //이 앞에 return을 넣어서 할수 있다
  } else {
    // 이부분에 아래있는 코드들을 가져와서  할수 있거나
  }

  //요청받은 유저의 정보를 저장
  const user = new User({
    name,
    email,
    personal: await jumin(personal),
    prefer,
    pwb,
    phone,
    og: {
      title: ogObj["og:title"],
      description: ogObj["og:description"],
      image: ogObj["og:image"],
    },
  });

  //디비에 안가고 저장된 데이터를 변수로서 할당해서 가져와 쓸수 있음
  const newuser = await user.save();
  //id 값을 찾기위해 저장한 유저정보를 변주에 할당해줌
  const getId = await User.findOne({ name: name });

  if (user) {
    // 가입환영 템플릿 만들기
    const myTemplate = getWelcomeTemplate({ name, phone, prefer });

    // 이메일에 가입환영 템플릿 전송하기
    sendTemplateToEmail(email, myTemplate);

    //저장후 응답으로 id 값 보내주기
    res.send(getId._id);
  }
});

//회원 목록 조회 api
app.get("/users", async (req, res) => {
  const answer = await User.find();

  res.send(answer);
});

//토큰 인증요청 api
app.post("/tokens/phone", async (req, res) => {
  const myphone = req.body.phone;
  const mytoken = getToken();

  const token = new Token({
    token: mytoken,
    phone: myphone,
    isAuth: false,
  });

  const answer = await Token.findOne({ phone: myphone });

  if (!answer) {
    await token.save();
  } else {
    await Token.updateOne({ phone: myphone }, { token: mytoken });
  }

  sendTokenToSMS(myphone, mytoken);
  res.send(myphone + "으로 인증 문자가 전송되었습니다.");
});

//인증완료 api
app.patch("/tokens/phone", async (req, res) => {
  const myphone = req.body.phone;
  const answer = await Token.findOne({ phone: myphone });

  //이부분에 || 연산자를 사용해서 else 안에 if문이 결과가 같으니 줄여서 할수 있다
  if (!answer) {
    res.send("false");
  } else {
    if (req.body.token !== answer.token) {
      res.send("false");
    } else {
      await Token.updateOne({ phone: myphone }, { isAuth: "true" });
      res.send("true");
    }
  }
});

mongoose
  .connect("mongodb://my-database:27017/mydocker10")
  .then(() => console.log("DB에 접속 되었습니다."))
  .catch(() => console.log("DB접속에 실패하였습니다."));

app.listen(3000, () => {
  console.log(`백엔드 API서버가 켜졌어요`);
});
