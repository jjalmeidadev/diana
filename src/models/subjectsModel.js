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
  },

  async updateSubjectById(id, subjectData) {
    const { name_subject, teacher_id, student_grade } = subjectData;
    const result = await db.query(
      'UPDATE subjects SET name_subject = $1, teacher_id = $2, student_grade = $3 WHERE id = $4 RETURNING *',
      [name_subject, teacher_id, student_grade, id]
    );
    return result.rows[0];
  },

  async deleteSubjectById(id) {
    const result = await db.query(
      'DELETE FROM subjects WHERE id = $1 RETURNING *',
      [id]
    );
    return result.rows[0];
  }
};

module.exports = SubjectsModel;