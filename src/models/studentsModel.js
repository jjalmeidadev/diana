const pool = require('../config/db');

async function getAllStudents() {
  const result = await pool.query('SELECT * FROM students');
  return result.rows;
}

async function getStudentById(id) {
  const result = await pool.query('SELECT * FROM students WHERE id = $1', [id]);
  return result.rows[0];
}

async function getStudentsByParentId(parentId) {
  const result = await pool.query('SELECT * FROM students WHERE parent_id = $1', [parentId]);
  return result.rows;
}

async function createStudent(student) {
  const {
    student_fullname, profimage_url, school_age, date_birth, gender, registration,
    academic_house_id, year_code_id, tutor_id, school_id, address, post_code,
    primary_contact, parent_id, primary_contact_forename, primary_contact_mobile,
    pupil_email, secondary_contact_email, secondary_contact_forename,
    secondary_contact_mobile, secondary_contact_surname, primary_contact_surname,
    relation_type, doctor_phone, medical_flags, medical_flag_notes, num_absences
  } = student;
  const result = await pool.query(
    `INSERT INTO students (
      student_fullname, profimage_url, school_age, date_birth, gender, registration,
      academic_house_id, year_code_id, tutor_id, school_id, address, post_code,
      primary_contact, parent_id, primary_contact_forename, primary_contact_mobile,
      pupil_email, secondary_contact_email, secondary_contact_forename,
      secondary_contact_mobile, secondary_contact_surname, primary_contact_surname,
      relation_type, doctor_phone, medical_flags, medical_flag_notes, num_absences
    ) VALUES (
      $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17,
      $18, $19, $20, $21, $22, $23, $24, $25, $26, $27
    ) RETURNING *`,
    [
      student_fullname, profimage_url, school_age, date_birth, gender, registration,
      academic_house_id, year_code_id, tutor_id, school_id, address, post_code,
      primary_contact, parent_id, primary_contact_forename, primary_contact_mobile,
      pupil_email, secondary_contact_email, secondary_contact_forename,
      secondary_contact_mobile, secondary_contact_surname, primary_contact_surname,
      relation_type, doctor_phone, medical_flags, medical_flag_notes, num_absences
    ]
  );
  return result.rows[0];
}

async function updateStudentById(id, student) {
  const {
    student_fullname, profimage_url, school_age, date_birth, gender, registration,
    academic_house_id, year_code_id, tutor_id, school_id, address, post_code,
    primary_contact, parent_id, primary_contact_forename, primary_contact_mobile,
    pupil_email, secondary_contact_email, secondary_contact_forename,
    secondary_contact_mobile, secondary_contact_surname, primary_contact_surname,

    relation_type, doctor_phone, medical_flags, medical_flag_notes, num_absences
  } = student;
  const result = await pool.query(
    `UPDATE students SET
      student_fullname = $1, profimage_url = $2, school_age = $3, date_birth = $4,
      gender = $5, registration = $6, academic_house_id = $7, year_code_id = $8,
      tutor_id = $9, school_id = $10, address = $11, post_code = $12,
      primary_contact = $13, parent_id = $14, primary_contact_forename = $15,
      primary_contact_mobile = $16, pupil_email = $17, secondary_contact_email = $18,
      secondary_contact_forename = $19, secondary_contact_mobile = $20,
      secondary_contact_surname = $21, primary_contact_surname = $22,
      relation_type = $23, doctor_phone = $24, medical_flags = $25,
      medical_flag_notes = $26, num_absences = $27
    WHERE id = $28 RETURNING *`,
    [
      student_fullname, profimage_url, school_age, date_birth, gender, registration,
      academic_house_id, year_code_id, tutor_id, school_id, address, post_code,
      primary_contact, parent_id, primary_contact_forename, primary_contact_mobile,
      pupil_email, secondary_contact_email, secondary_contact_forename,
      secondary_contact_mobile, secondary_contact_surname, primary_contact_surname,
      relation_type, doctor_phone, medical_flags, medical_flag_notes, num_absences,
      id
    ]
  );
  return result.rows[0];
}

async function deleteStudentById(id) {
  const result = await pool.query('DELETE FROM students WHERE id = $1 RETURNING *', [id]);
  return result.rows[0];
}

module.exports = {
  getAllStudents,
  getStudentById,
  getStudentsByParentId,
  createStudent,
  updateStudentById,
  deleteStudentById,
};
