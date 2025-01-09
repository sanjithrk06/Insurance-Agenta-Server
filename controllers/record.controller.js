import { Company } from "../models/company.model.js";
import { Record } from "../models/record.model.js";

// Create a new record
export const createRecord = async (req, res) => {
  try {
    const { company } = req.body;

    // Validate the company ID
    if (company) {
      const existingCompany = await Company.findById(company);
      if (!existingCompany) {
        return res.status(400).json({ message: "Invalid company ID" });
      }
    }

    const record = new Record(req.body);
    await record.save();
    res
      .status(201)
      .json({ message: "Record created successfully", data: record });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Failed to create record", error: error.message });
  }
};

// Get all records
export const getAllRecords = async (req, res) => {
  try {
    const records = await Record.find().populate("company");
    res
      .status(200)
      .json({ message: "Records fetched successfully", data: records });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch records", error: error.message });
  }
};

// Get a single record by ID
export const getRecordById = async (req, res) => {
  try {
    const { id } = req.params;
    const record = await Record.findById(id).populate("company");
    if (!record) {
      return res.status(404).json({ message: "Record not found" });
    }
    res
      .status(200)
      .json({ message: "Record fetched successfully", data: record });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch record", error: error.message });
  }
};

// Update a record by ID
export const updateRecord = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedRecord = await Record.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedRecord) {
      return res.status(404).json({ message: "Record not found" });
    }
    res
      .status(200)
      .json({ message: "Record updated successfully", data: updatedRecord });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Failed to update record", error: error.message });
  }
};

// Delete a record by ID
export const deleteRecord = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedRecord = await Record.findByIdAndDelete(id);
    if (!deletedRecord) {
      return res.status(404).json({ message: "Record not found" });
    }
    res
      .status(200)
      .json({ message: "Record deleted successfully", data: deletedRecord });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to delete record", error: error.message });
  }
};
