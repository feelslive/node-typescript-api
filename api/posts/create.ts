import { RequestHandler } from "express";
import { DataStore } from "../../data/data";
import { NewPost } from "../../interface/posts";
import uuid from "uuid/v4"


export const createPost: RequestHandler = (req, res) => {
    console.log(req.body)
    const newPost: NewPost = {
      id: uuid(),
      userId: req.body.userId || 1,
      title: req.body.title,
      body: req.body.body,
    };
    DataStore.posts.push(newPost);
    res.json(newPost)
};
