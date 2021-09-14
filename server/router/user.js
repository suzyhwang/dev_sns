var express = require("express");
var router = express.Router();

const { usersController } = require("../controller");

// 유저정보요청
//rotuer.get("/:userid",)

// 회원가입 POST /users/signup
router.post("/signup", usersController.signup.post);

// 로그인 POST /users/login
router.post("/login", usersController.login.post);

// 로그아웃

// 회원탈퇴 DELETE /users/delete
router.delete("/delete", usersController.delete.delete);
// 유저정보수정

// 비밀번호변경

module.exports = router;
