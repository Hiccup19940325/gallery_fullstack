import mongoose from "mongoose"

const userSchema = new mongoose.Schema(
    {
        name: String,
        email: {
            type: String,
            required: true,
            index: true
        },
        role: {
            type: String,
            default: "user"
        }
    },
    { timestamps: true }
)

export default mongoose.model("User", userSchema)
