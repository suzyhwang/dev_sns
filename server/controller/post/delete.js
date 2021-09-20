const { posts } = require("../../models");

module.exports = {
  delete: async (req, res) => {
    const id = req.userId;
    const { postid } = req.body;
    await posts.destroy({ where: { id: postid } });

    res.status(200).json({ message: "게시글이 삭제되었습니다." });
  },
};
