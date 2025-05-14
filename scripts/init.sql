CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR,
  password VARCHAR,
  type_of_user VARCHAR
);

CREATE TABLE tutors (
  id SERIAL PRIMARY KEY,
  name_tutor VARCHAR,
  email VARCHAR
);

CREATE TABLE teachers (
  id SERIAL PRIMARY KEY,
  teacher_name VARCHAR,
  teacher_email VARCHAR
);

CREATE TABLE students (
  id SERIAL PRIMARY KEY,
  student_name VARCHAR,
  date_birth DATE,
  parent_id INTEGER REFERENCES users(id),
  address VARCHAR,
  num_absences INTEGER,
  tutor_id INTEGER REFERENCES tutors(id),
  registration INTEGER,
  student_surname VARCHAR,
  student_fullname VARCHAR,
  gender VARCHAR,
  school_age FLOAT,
  academic_house VARCHAR,
  school_id INTEGER,
  primary_contact VARCHAR,
  year_code VARCHAR,
  post_code VARCHAR,
  medical_flags VARCHAR
);

CREATE TABLE events (
  id SERIAL PRIMARY KEY,
  concept VARCHAR,
  student_id INTEGER REFERENCES students(id)
);

CREATE TABLE reports (
  id SERIAL PRIMARY KEY,
  date_report TIMESTAMP,
  student_id INTEGER REFERENCES students(id)
);

CREATE TABLE subjects (
  id SERIAL PRIMARY KEY,
  name_subject VARCHAR,
  teacher_id INTEGER REFERENCES teachers(id),
  student_grade INTEGER
);

CREATE TABLE student_subject (
  id SERIAL PRIMARY KEY,
  student_id INTEGER REFERENCES students(id),
  subject_id INTEGER REFERENCES subjects(id),
  grade INTEGER
);