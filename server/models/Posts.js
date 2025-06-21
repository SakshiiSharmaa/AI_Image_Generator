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

// To create a model/collection Post with structure defined in PostSchema
const Post = mongoose.model("Post", PostSchema);

export default Post;
