const { users } = require("../models");
const jwt = require("jsonwebtoken");

module.exports = {
  refreshToken: async (req, res) => {
    const token = req.cookies.refreshToken;

    if (!token) {
      res.status(401).json({ data: null, message: "refresh token이 존재하지 않습니다." });
    } else {
      jwt.verify(token, process.env.REFRESH_SECRET, async (err, decode) => {
        if (err) {
          res.json({ data: null, message: "refresh token이 유효하지않아 다시 로그인하십시오" });
        } else {
          const userInfo = await users.findOne({
            where: { id: decode.id },
          });

          if (!userInfo) {
            res.json({ data: null, message: "refresh token 일치하는 유저가 없습니다." });
          } else {
            delete userInfo.dataValues.password;
            const payload = userInfo.dataValues;
            const accessToken = jwt.sign(payload, process.env.ACCESS_SECRET, { expiresIn: "10h" });
            res.json({ data: { accessToken, userInfo }, message: "ok" });
          }
        }
      });
    }
  },
};
