const db = require("../config/db");

module.exports = {
  studentList: async (req, res) => {
    try {
      let result = [];
      result = await db.query("SELECT * FROM students");
      return res
        .status(200)
        .json({ success: true, count: result[0]?.length, data: result[0] });
    } catch (error) {
      return res.status(500).json({ success: false, message: error?.message });
    }
  },
  studentById: async (req, res) => {
    try {
      let { id } = req.params;
      //   let result = await db.query(`SELECT * FROM students WHERE student_id=${id}`);
      let result = await db.query(`SELECT * FROM students WHERE student_id=?`, [
        id,
      ]);

      return res
        .status(200)
        .json({ success: true, count: result[0]?.length, data: result[0] });
    } catch (error) {
      return res.status(500).json({ success: false, message: error?.message });
    }
  },
  addStudents: async (req, res) => {
    try {
      let { name, roll_number, medium, fee, classes } = req.body;
      let result = await db.query(
        `INSERT INTO students (name, roll_number, medium,fee, classes) values(?, ?, ?, ?, ?)`,
        [name, roll_number, medium, fee, classes]
      );
      return res.status(200).json({success: true, data: result[0]})
    } catch (error) {
      console.log("error>>>>>>>", error);
      return res.status(500).json({ success: false, message: error?.message });
    }
  },
  updateStudents:async(req, res) => {
    try {
        let { name, roll_number, medium, fee, classes } = req.body;
        let {id} = req.params
        let result = await db.query(
          `UPDATE students SET name = ?, roll_number=?, medium = ?, fee = ? , classes = ? WHERE student_id = ?`, [name, roll_number, medium,fee, classes, id])
        return res.status(200).json({success: true, data: result[0]})
      } catch (error) {
        console.log("error>>>>>>>", error);
        return res.status(500).json({ success: false, message: error?.message });
      }
  },
  deletStudents:async(req,res) => {
    try {
        let {id} = req.params
        await db.query(
          `DELETE FROM students WHERE student_id = ?`, [id])
        return res.status(200).json({success: true, message: 'User deleted successfully.'})
      } catch (error) {
        console.log("error>>>>>>>", error);
        return res.status(500).json({ success: false, message: error?.message });
      }
  }
};
