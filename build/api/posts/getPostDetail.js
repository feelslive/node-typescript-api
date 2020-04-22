"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("../../data/data");
exports.getPostDetail = (req, res) => {
    const findItem = data_1.DataStore.posts.find((el) => req.params.id == el.id);
    if (findItem) {
        res.send(findItem);
    }
    else {
        res.status(404).json({
            msg: "没有找到"
        });
    }
};
