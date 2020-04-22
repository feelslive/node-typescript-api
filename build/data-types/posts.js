"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PostTypes {
    constructor(data) {
        this.id = data.id;
        this.userId = data.userId;
        this.title = data.title;
        this.body = data.body;
    }
}
exports.PostTypes = PostTypes;
