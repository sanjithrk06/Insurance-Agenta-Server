import { Company } from "../models/company.model.js";

// Create a new company
export const createCompany = async (req, res) => {
  try {
    const company = new Company(req.body);
    await company.save();
    res
      .status(201)
      .json({ message: "Company created successfully", data: company });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Failed to create company", error: error.message });
  }
};

// Get all companies
export const getAllCompanies = async (req, res) => {
  try {
    const companies = await Company.find().populate("records");
    res
      .status(200)
      .json({ message: "Companies fetched successfully", data: companies });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch companies", error: error.message });
  }
};

// Get a single company by ID
export const getCompanyById = async (req, res) => {
  try {
    const { id } = req.params;
    const company = await Company.findById(id).populate("records");
    if (!company) {
      return res.status(404).json({ message: "Company not found" });
    }
    res
      .status(200)
      .json({ message: "Company fetched successfully", data: company });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch company", error: error.message });
  }
};

// Update a company by ID
export const updateCompany = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedCompany = await Company.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedCompany) {
      return res.status(404).json({ message: "Company not found" });
    }
    res
      .status(200)
      .json({ message: "Company updated successfully", data: updatedCompany });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Failed to update company", error: error.message });
  }
};

// Delete a company by ID
export const deleteCompany = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedCompany = await Company.findByIdAndDelete(id);
    if (!deletedCompany) {
      return res.status(404).json({ message: "Company not found" });
    }
    res
      .status(200)
      .json({ message: "Company deleted successfully", data: deletedCompany });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to delete company", error: error.message });
  }
};
