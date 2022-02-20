import connection from "../data/connection";

export const updateTeacher=async(teacherId:string, classId:string)=>{
    await connection("teacher")
    .update("teacher.class_id",classId)
    .where("teacher.id",teacherId)
}