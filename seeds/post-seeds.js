const { Post } = require("../models");

const postdata = [
  {
    title: "A test!",
    post_text: "this is a post!",
    user_id: 1,
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
