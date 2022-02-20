import { updateClassStudent } from './endpoints/updateClassStudent';
import { getStudents } from './endpoints/getStudent';
import { createStudent } from './endpoints/createStudent';
import { app } from "./app";
import {createTeacher} from "./endpoints/createTeacher"
import { getAllTeachers } from './endpoints/getAllTeachers';
import { updateClassTeacher } from './endpoints/updateClassTeacher';
import { getStudentsByHobby } from './endpoints/getStudentsHobby';

//STUDENT

app.post("/student", createStudent)
app.get("/student", getStudents)
app.get("/student/hobby", getStudentsByHobby)
app.put("/student/class", updateClassStudent)

//TEACHER

app.post("/teacher", createTeacher);
app.get("/teacher",getAllTeachers)
app.put("/teacher",updateClassTeacher)

