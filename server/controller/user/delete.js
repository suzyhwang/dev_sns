const { users } = require("../../models");

module.exports = {
  delete: async (req, res) => {
    req.destroy();
    res.sendStatus(200);
  },
};
