import {
    DataStore
} from "../../data/data";
import {
    RequestHandler
} from "express";

export const deletePost: RequestHandler = (req, res) => {
    const findItem = DataStore.posts.findIndex(
        (el: any) => req.params.id == el.id
    );
    if (findItem > -1) {
        DataStore.posts.splice(findItem,1)
        res.status(200).json({
          msg: "删除成功",
        });
    } else {
        res.status(404).json({
          msg: "删除失败",
        });
    }
};