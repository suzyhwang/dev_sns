var express = require("express");
var router = express.Router();
const { accessToken } = require("../middleware/accessToken");
const { usersController } = require("../controller");

// 유저정보요청 GET /users/userinfo
router.get("/userinfo", accessToken, usersController.userinfo.get);

// 회원가입 POST /users/signup
router.post("/signup", usersController.signup.post);

// 로그인 POST /users/login
router.post("/login", usersController.login.post);

// 로그아웃
router.post("/logout", usersController.logout.post);

// 회원탈퇴 DELETE /users/delete
router.delete("/delete", accessToken, usersController.delete.delete);

// 유저정보수정
router.put("/edit", accessToken, usersController.edit.put);

// 비밀번호변경
router.put("/editpassword", accessToken, usersController.editpassword.put);

module.exports = router;
