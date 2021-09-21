const { posts } = require("../../models");

module.exports = {
  put: async (req, res) => {
    // const id = req.userId;

    const { postid, comment } = req.body;

    await posts.update({ comment: comment, updatedAt: new Date() }, { where: { id: postid } });

    const newpost = await posts.findOne({ where: { id: postid } });
    console.log(newpost);

    res.json({ data: newpost, message: "게시글이 수정 되었습니다." });
  },
};
