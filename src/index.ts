import { updateClassStudent } from './endpoints/updateClassStudent';
import { getStudentByName } from './endpoints/getStudentByName';
import { createStudent } from './endpoints/createStudent';
import { app } from "./app";
import {createTeacher} from "./endpoints/createTeacher"
import { getAllTeachers } from './endpoints/getAllTeachers';

//STUDENT

app.post("/student", createStudent)
app.get("/student", getStudentByName)
app.put("/student/class", updateClassStudent)

//Teacher
app.post("/teacher", createTeacher);
app.get("/teacher",getAllTeachers)

