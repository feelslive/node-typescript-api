import { DataStore } from "../../data/data";
import { RequestHandler } from "express";

export const getPostDetail: RequestHandler = (req, res) => {
    const findItem = DataStore.posts.find((el: any) => req.params.id == el.id);
    if (findItem) {
        res.send(findItem);
    } else {
        res.status(404).json({
            msg:"没有找到"
        })
    }
};
