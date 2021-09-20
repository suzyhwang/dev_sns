const { users } = require("../../models");

module.exports = {
  post: async (req, res) => {
    console.log("token===============", req.headers);
    const { nickname, email } = req.body;
    //닉네임 중복 확인
    const nicknamefound = await users.findOne({ where: { nickname: nickname } });
    //이메일 중복 확인
    const emailfound = await users.findOne({ where: { email: email } });

    // 닉네임, 이메일 각각 중복되었을 때 출력 코드
    if (nicknamefound) {
      return res.status(409).json({ message: `${nickname}은 존재하는 닉네임입니다.` });
    } else if (emailfound) {
      return res.status(409).json({ message: `${email}은 존재하는 이메일입니다.` });
    }

    //데이터베이스에 데이터 생성
    await users.create(req.body).then((data) => data.dataValues.id);
    res.json({ message: "회원가입이 완료 되었습니다." });
  },
};
