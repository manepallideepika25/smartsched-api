import mongoose from "mongoose";

const interviewSchema = new mongoose.Schema(
  {
    candidateName: { type: String, required: true },
    interviewDate: { type: String, required: true },
    interviewTime: { type: String, required: true },
    status: { type: String, enum: ["Scheduled", "Completed", "Cancelled"], default: "Scheduled" },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }
  },
  { timestamps: true }
);

const Interview = mongoose.model("Interview", interviewSchema);

export default Interview;
