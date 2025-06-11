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

  async createSubject( name_subject, teacher_id) {
    const result = await db.query(
      'INSERT INTO subjects (name_subject, teacher_id) VALUES ($1, $2) RETURNING *',
      [name_subject, teacher_id]
    );
    return result.rows[0];
  },

  async updateSubjectById(name_subject, teacher_id, id) {
    const result = await db.query(
      'UPDATE subjects SET name_subject = $1, teacher_id = $2 WHERE id = $3 RETURNING *',
      [name_subject, teacher_id, id]
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