// 휴대폰 인증 토큰 전송API를 요청해주세요.

const getValidationNumber = async () => {
  document.querySelector("#ValidationInputWrapper").style.display = "flex";
  const phone =
    document.getElementById("PhoneNumber01").value +
    document.getElementById("PhoneNumber02").value +
    document.getElementById("PhoneNumber03").value;

  axios
    .post("http://localhost:3000/tokens/phone", {
      phone: phone,
    })
    .then(() => {
      console.log("인증완료");
    });
};

// 핸드폰 인증 완료 API를 요청해주세요.
const submitToken = async () => {
  const token = document.getElementById("TokenInput").value;
  const phone =
    document.getElementById("PhoneNumber01").value +
    document.getElementById("PhoneNumber02").value +
    document.getElementById("PhoneNumber03").value;
  axios
    .patch("http://localhost:3000/tokens/phone", {
      phone,
      token,
    })
    .then(() => {
      console.log("토큰 인증 완료");
    });
};

// 회원 가입 API를 요청해주세요.
const submitSignup = async () => {
  const name = document.getElementById("SignupName").value;
  const email = document.getElementById("SignupEmail").value;
  const personal =
    document.getElementById("SignupPersonal1").value +
    "-" +
    document.getElementById("SignupPersonal2").value;
  const prefer = document.getElementById("SignupPrefer").value;
  const pwb = document.getElementById("SignupPwd").value;
  const phone =
    document.getElementById("PhoneNumber01").value +
    document.getElementById("PhoneNumber02").value +
    document.getElementById("PhoneNumber03").value;

  axios.post("http://localhost:3000/users", {
    name,
    email,
    personal,
    prefer,
    pwb,
    phone,
  });
  console.log("회원 가입 완료");
};
