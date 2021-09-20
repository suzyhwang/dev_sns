const { users } = require("../../models");

module.exports = {
  post: async (req, res) => {
    const header = req.headers;
    if (!header.authorization && !header.cookie) {
      req.state(400).json({ message: "이미 로그아웃 되었습니다." });
    } else {
      //   header.delete("cookie");
      //   header.delete("authorization");
      //   req.state(200).json({ message: "로그아웃 되었습니다." });
    }

    console.log("---------------", header.authorization);
    console.log("===============", header.cookie);
  },
};
