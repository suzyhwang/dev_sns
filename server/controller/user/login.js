const { users } = require("../../models");
const jwt = require("jsonwebtoken");

module.exports = {
  post: async (req, res) => {
    const { email, password } = req.body;

    //이메일 찾기
    const findemail = await users.findOne({ where: { email: email } });
    // 이메일 비밀번호 확인
    const login = await users.findOne({ where: { email: email, password: password } });

    // 이메일이 데이터베이스에 없을 때
    if (!findemail) {
      return res.status(409).json({ message: "잘못된 이메일 입니다." });
    }
    // 이메일과 비밀번호가 맞지 않을 때
    if (!login) {
      return res.status(409).json({ message: "잘못된 비밀번호입니다." });
    }
    const payload = {
      id: login.id,
      nickname: login.userId,
      email: login.email,
      createdAt: login.createdAt,
      updatedAt: login.updatedAt,
    };

    const accessToken = jwt.sign(payload, process.env.ACCESS_SECRET, { expiresIn: "3s" });
    const refreshToken = jwt.sign(payload, process.env.REFRESH_SECRET, { expiresIn: "2d" });

    // refreshtoken은 쿠키에
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
    });

    res.status(200).json({ data: { accessToken: accessToken }, message: "로그인 완료" });
  },
};
