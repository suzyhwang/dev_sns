const { users } = require("../../models");

module.exports = {
  put: async (req, res) => {
    const id = req.userId;
    const { password } = req.body;
    // 로그인된 아이디 정보 찾기
    const user = await users.findOne({ where: { id: id } });
    console.log("------------------------------", user);

    // 닉네임, 이메일 각각 중복되었을 때 출력 코드
    if (password === user.dataValues.password) {
      return res.status(200).json({ message: `비밀번호가 변경되지 않았습니다.` });
    }

    //데이터베이스에 데이터 변경
    await users.update({ password: password }, { where: { id: id } });

    const newuser = await users.findOne({ where: { id: id } });
    console.log(newuser);

    res.json({ data: newuser, message: "비밀번호가 변경되었습니다." });
  },
};
