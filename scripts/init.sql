CREATE TABLE student(
  id SERIAL PRIMARY KEY,
  report_id INTEGER REFERENCES reports(id),
  student_name VARCHAR,
  date_birth DATE,
  parent_id INTEGER REFERENCES users(id),
  subject_id INTEGER REFERENCES subject(id),
  address VARCHAR,
  num_absences INTEGER,
  tutor_id INTEGER REFERENCES tutor(id),
  registration INTEGER,
  report VARCHAR,
  surname_student VARCHAR,
  fullname_student VARCHAR,
  gender VARCHAR,
  school_age FLOAT,
  academic_house VARCHAR,
  school_id INTEGER,
  primary_contact VARCHAR
);

CREATE TABLE events(
  id SERIAL PRIMARY KEY,
  concept VARCHAR,
  student_id INTEGER REFERENCES student(id)
);

CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  email VARCHAR,
  password VARCHAR,
  type_of_user VARCHAR
);

CREATE TABLE tutor(
  id SERIAL PRIMARY KEY,
  name_tutor VARCHAR,
  email VARCHAR
);

CREATE TABLE reports(
  id SERIAL PRIMARY KEY,
  date_report TIMESTAMP
);

CREATE TABLE subject(
  id SERIAL PRIMARY KEY,
  name_subject VARCHAR,
  teacher_id INTEGER REFERENCES teacher(id),
  student_grade INTEGER
);

CREATE TABLE teacher(
  id SERIAL PRIMARY KEY,
  teacher_name VARCHAR,
  email VARCHAR
);