import {
    DataStore
} from "../../data/data";
import { NewPost } from "../../interface/posts";
import {
    RequestHandler
} from "express";

export const updatePost: RequestHandler = (req, res) => {
    const findItem = DataStore.posts.findIndex(
        (el: any) => req.params.id == el.id
    );
    if (findItem > -1) {
        const originalPost = DataStore.posts[findItem]
        const updatePost: NewPost = {
          id: req.params.id,
          userId: req.body.userId || originalPost.userId,
          title: req.body.title || originalPost.title,
          body: req.body.body || originalPost.body,
        };

        DataStore.posts[findItem] = updatePost;
        res.status(200).json({
            msg: "更新成功",
        });
    } else {
        res.status(404).json({
            msg: "更新失败",
        });
    }
};