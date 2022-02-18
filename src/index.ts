import { updateClassStudent } from './endpoints/updateClassStudent';
import { getStudentByName } from './endpoints/getStudentByName';
import { createStudent } from './endpoints/createStudent';
import { app } from "./app";


//STUDENT

app.post("/student", createStudent)
app.get("/student", getStudentByName)
app.put("/student/class", updateClassStudent)

const dateAnterior = "18/02/2022"
const dateSplit = dateAnterior.split("/")
console.log(dateSplit)
console.log(new Date(`${dateSplit[2]}-${dateSplit[1]}-${dateSplit[0]}`))