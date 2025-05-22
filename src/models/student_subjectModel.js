const db = require('../config/db');

const StudentSubjectModel = {
  async getAllStudentSubjects() {
    const result = await db.query('SELECT * FROM student_subject');
    return result.rows;
  },

  async getStudentSubjectById(id) {
    const result = await db.query('SELECT * FROM student_subject WHERE id = $1', [id]);
    return result.rows[0];
  },

  async createStudentSubject({ student_id, subject_id, grade }) {
    const result = await db.query(
      'INSERT INTO student_subject (student_id, subject_id, grade) VALUES ($1, $2, $3) RETURNING *',
      [student_id, subject_id, grade]
    );
    return result.rows[0];
  }
};

module.exports = StudentSubjectModel;