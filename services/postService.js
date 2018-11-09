const Post = require("../models").Post;

async function getPosts() {
  const posts = await Post.findAll();

  return posts;
}

module.exports = {
  getPosts
};