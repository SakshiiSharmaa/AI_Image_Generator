import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  prompt: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
});

//to create a model/collection Post with structre defined in POstSchema
const Post = mongoose.model("Post", PostSchema);

export default Post;
