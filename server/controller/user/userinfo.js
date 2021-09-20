const { users } = require("../../models");

module.exports = {
  get: async (req, res) => {
    const id = req.userId;

    // 로그인된 아이디 정보 찾기
    const user = await users.findOne({ where: { id: id } });
    console.log(user);

    if (!user) {
      return res.status(404).json({ message: "해당 유저를 찾을 수 없습니다." });
    }
    res.status(200).json({ data: user });
  },
};
