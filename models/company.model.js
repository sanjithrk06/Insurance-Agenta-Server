import mongoose from "mongoose";

const CompanySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    agentName: { type: String },
    licence: { type: String },
    records: [{ type: mongoose.Schema.Types.ObjectId, ref: "Record" }],
  },
  { timestamps: true }  
);

export const Company = mongoose.model("Company", CompanySchema);
