const { users } = require("../../models");

module.exports = {
  put: async (req, res) => {
    const id = req.userId;
    const { nickname, email, birthDay } = req.body;
    // 로그인된 아이디 정보 찾기
    const user = await users.findOne({ where: { id: id } });
    console.log("------------------------------", user);

    //닉네임 중복 확인
    const nicknamefound = await users.findOne({ where: { nickname: nickname } });
    //이메일 중복 확인
    const emailfound = await users.findOne({ where: { email: email } });

    // 닉네임, 이메일 각각 중복되었을 때 출력 코드
    // 사용중인 이메일, 비밀번호를
    if (nicknamefound && nickname !== user.dataValues.nickname) {
      return res.status(409).json({ message: `${nickname}은 존재하는 닉네임입니다.` });
    } else if (emailfound && email !== user.dataValues.email) {
      return res.status(409).json({ message: `${email}은 존재하는 이메일입니다.` });
    } else if (nickname === user.dataValues.nickname && email === user.dataValues.email && birthDay === user.dataValues.birthDay) {
      return res.status(200).json({ message: `변경된 정보가 없습니다.` });
    }

    //데이터베이스에 데이터 변경
    await users.update({ nickname: nickname, email: email, birthDay: birthDay, updatedAt: new Date() }, { where: { id: id } });

    const newuser = await users.findOne({ where: { id: id } });
    console.log(newuser);

    res.json({ data: newuser, message: "정보가 변경되었습니다." });
  },
};
