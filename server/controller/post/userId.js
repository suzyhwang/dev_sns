const { posts } = require("../../models");

module.exports = {
  get: async (req, res) => {
    const id = req.userId;
    const post = await posts.findAll({ where: { userId: id } });
    console.log("123123123123", post);
    if (post.length === 0) {
      res.status(400).json({ message: "작성된 게시글이 없습니다." });
    }
    res.status(200).json({ data: post });
  },
};
