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
import {
    deletePost
} from "./api/posts/deletePost"
import { updatePost } from "./api/posts/updatePost";
const app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}))
// parse application/json
app.use(bodyParser.json())

//请求列表
app.get("/posts", getPosts);
//请求详情
app.get("/post/:id", getPostDetail);
//添加数据
app.post("/post", createPost);
//删除数据
app.delete('/post/:id', deletePost)
//更新数据
app.put("/post/:id",updatePost)

app.listen(process.env.PORT || 8090, () => {
    console.log("server start...")
})