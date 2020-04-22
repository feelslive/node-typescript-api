"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const getPosts_1 = require("./api/posts/getPosts");
const getPostDetail_1 = require("./api/posts/getPostDetail");
const create_1 = require("./api/posts/create");
const app = express_1.default();
// parse application/x-www-form-urlencoded
app.use(body_parser_1.default.urlencoded({
    extended: false
}));
// parse application/json
app.use(body_parser_1.default.json());
//请求列表
app.get("/posts", getPosts_1.getPosts);
//请求单个
app.get("/post/:id", getPostDetail_1.getPostDetail);
//发送单个
app.post("/post", create_1.createPost);
app.listen(process.env.PORT || 8090, () => {
    console.log("server start...");
});
