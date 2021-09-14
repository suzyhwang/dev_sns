const { users } = require("../../models");

module.exports = {
  post: async (req, res) => {
    const { email, password } = req.body;

    //이메일 찾기
    const findemail = await users.findOne({ where: { email: email } });
    // 이메일 비밀번호 확인
    const login = await users.findOne({ where: { email: email, password: password } });

    // 이메일이 데이터베이스에 없을 때
    if (!findemail) {
      return res.status(409).json({ message: "존재하지 않는 이메일 입니다." });
    }
    // 이메일과 비밀번호가 맞지 않을 때
    if (!login) {
      return res.status(409).json({ message: "비밀번호가 틀렸습니다." });
    }
    res.status(200).json({ message: "로그인 완료" });
  },
};
