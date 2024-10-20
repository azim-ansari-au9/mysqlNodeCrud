const express = require("express");
const {
  studentList,
  studentById,
  addStudents,
  updateStudents,
  deletStudents,
} = require("../controllers/student");
const router = express.Router();

//routes for APIs
router.get("/list", studentList);
router.get("/get/:id", studentById);
router.post("/add", addStudents);
router.put("/update/:id", updateStudents);
router.delete("/delete/:id", deletStudents);


module.exports = router;
