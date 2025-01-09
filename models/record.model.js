import mongoose from "mongoose";

const RecordSchema = new mongoose.Schema(
  {
    vehicleNumber: { type: String, required: true },
    vehicleName: { type: String, required: true },
    policy: { type: String, required: true },
    ownerName: { type: String, required: true },
    insuranceDate: { type: Date, required: true },
    expiryDate: { type: Date, required: true },
    insType: { type: String, required: true },
    insPrice: { type: Number, required: true },
    company: { type: mongoose.Schema.Types.ObjectId, ref: "Company" },
  },
  { timestamps: true }
);

export const Record = mongoose.model("Record", RecordSchema);
