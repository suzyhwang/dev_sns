const { posts } = require("../../models");

module.exports = {
  post: async (req, res) => {
    const id = req.userId;
    const { comment } = req.body;
    console.log(comment);
    if (!comment) {
      res.state(400).json({ message: "게시글을 작성하지 않았습니다." });
    }
    await posts.create({ userId: id, comment: comment });
    res.json({ data: { comment }, message: "게시글이 작성되었습니다." });
  },
};
