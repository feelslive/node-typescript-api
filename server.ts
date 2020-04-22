import express from 'express'
import bodyParser from 'body-parser'
import {
    getPosts
} from './api/posts/getPosts'
import {
    getPostDetail
} from "./api/posts/getPostDetail";
import {
    createPost
} from "./api/posts/create";

const app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}))
// parse application/json
app.use(bodyParser.json())

//请求列表
app.get("/posts", getPosts);
//请求单个
app.get("/post/:id", getPostDetail);
//发送单个
app.post("/post", createPost);

app.listen(process.env.PORT || 8090, () => {
    console.log("server start...")
})