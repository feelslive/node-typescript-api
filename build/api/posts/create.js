"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("../../data/data");
const v4_1 = __importDefault(require("uuid/v4"));
exports.createPost = (req, res) => {
    console.log(req.body);
    const newPost = {
        id: v4_1.default(),
        userId: req.body.userId || 1,
        title: req.body.title,
        body: req.body.body,
    };
    data_1.DataStore.posts.push(newPost);
    res.json(newPost);
};
