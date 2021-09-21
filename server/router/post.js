var express = require("express");
var router = express.Router();
const { accessToken } = require("../middleware/accessToken");
const { postController } = require("../controller");

// GET	/post/:userid	자신이 쓴 게시글 불러오기
router.get("/userId", accessToken, postController.userId.get);

// POST	/post/write	게시글 쓰기
router.post("/write", accessToken, postController.write.post);

// PUT	/post/edit	게시글 수정
router.put("/edit", accessToken, postController.edit.put);

// DELETE	/post/delete	게시글 삭제
router.delete("/delete", accessToken, postController.delete.delete);

module.exports = router;
