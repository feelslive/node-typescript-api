import {
    DataStore
} from "../../data/data";
import {
    RequestHandler
} from "express"
import { PostTypes } from "../../data-types/posts";
export const getPosts: RequestHandler = (req, res) => {
    res.json(DataStore.posts.map((item: any) => new PostTypes(item)));
}