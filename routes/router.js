import express from "express";
import {
  createRecord,
  getAllRecords,
  getRecordById,
  updateRecord,
  deleteRecord,
} from "../controllers/record.controller.js";

import {
  createCompany,
  getAllCompanies,
  getCompanyById,
  updateCompany,
  deleteCompany,
} from "../controllers/company.controller.js";

const router = express.Router();

// Record routes
router.post("/records", createRecord); // Create a new record
router.get("/records", getAllRecords); // Get all records
router.get("/records/:id", getRecordById); // Get a single record by ID
router.put("/records/:id", updateRecord); // Update a record by ID
router.delete("/records/:id", deleteRecord); // Delete a record by ID

// Company routes
router.post("/companies", createCompany); // Create a new company
router.get("/companies", getAllCompanies); // Get all companies
router.get("/companies/:id", getCompanyById); // Get a single company by ID
router.put("/companies/:id", updateCompany); // Update a company by ID
router.delete("/companies/:id", deleteCompany); // Delete a company by ID

export default router;
