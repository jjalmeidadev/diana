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
  },

  async updateStudentSubjectById(id, studentSubjectData) {
    const { student_id, subject_id, grade } = studentSubjectData;
    const result = await db.query(
      'UPDATE student_subject SET student_id = $1, subject_id = $2, grade = $3 WHERE id = $4 RETURNING *',
      [student_id, subject_id, grade, id]
    );
    return result.rows[0];
  },

  async deleteStudentSubjectById(id) {
    const result = await db.query(
      'DELETE FROM student_subject WHERE id = $1 RETURNING *',
      [id]
    );
    return result.rows[0];
  }
};

module.exports = StudentSubjectModel;