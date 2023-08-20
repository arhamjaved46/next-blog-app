import mongoose from "mongoose";

const postsSchema = new mongoose.Schema(
    {
        title: String,
        description: String,
    },
    {
        timestamps: true,
    }
);

const Posts = mongoose.models.Posts || mongoose.model('Posts', postsSchema);
export default Posts;