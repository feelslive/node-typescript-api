"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("../../data/data");
exports.deletePost = (req, res) => {
    const findItem = data_1.DataStore.posts.findIndex((el) => req.params.id == el.id);
    if (findItem > -1) {
        data_1.DataStore.posts.splice(findItem, 1);
        res.status(200).json({
            msg: "删除成功",
        });
    }
    else {
        res.status(404).json({
            msg: "删除失败",
        });
    }
};
