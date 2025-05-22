const db = require('../config/db');

const SubjectsModel = {
  async getAllSubjects() {
    const result = await db.query('SELECT * FROM subjects');
    return result.rows;
  },

  async getSubjectById(id) {
    const result = await db.query('SELECT * FROM subjects WHERE id = $1', [id]);
    return result.rows[0];
  },

  async createSubject({ name_subject, teacher_id, student_grade }) {
    const result = await db.query(
      'INSERT INTO subjects (name_subject, teacher_id, student_grade) VALUES ($1, $2, $3) RETURNING *',
      [name_subject, teacher_id, student_grade]
    );
    return result.rows[0];
  }
};

module.exports = SubjectsModel;