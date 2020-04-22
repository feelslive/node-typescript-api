"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("../../data/data");
const posts_1 = require("../../data-types/posts");
exports.getPosts = (req, res) => {
    res.json(data_1.DataStore.posts.map((item) => new posts_1.PostTypes(item)));
};
