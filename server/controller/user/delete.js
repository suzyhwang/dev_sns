const { users } = require("../../models");

module.exports = {
  delete: async (req, res) => {
    const id = req.userId;
    await users.destroy({ where: { id: id } });

    res.status(200).json({ message: "회원탈퇴가 완료 되었습니다." });
  },
};
