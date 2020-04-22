"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("../../data/data");
exports.updatePost = (req, res) => {
    const findItem = data_1.DataStore.posts.findIndex((el) => req.params.id == el.id);
    if (findItem > -1) {
        const originalPost = data_1.DataStore.posts[findItem];
        const updatePost = {
            id: req.params.id,
            userId: req.body.userId || originalPost.userId,
            title: req.body.title || originalPost.title,
            body: req.body.body || originalPost.body,
        };
        data_1.DataStore.posts[findItem] = updatePost;
        res.status(200).json({
            msg: "更新成功",
        });
    }
    else {
        res.status(404).json({
            msg: "更新失败",
        });
    }
};
