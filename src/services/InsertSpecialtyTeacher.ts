import connection from "../data/connection"



export const InsertSpecialtyTeacher= async(teacher_id:string,class_id:string,specialty_id:string): Promise<void> =>{
        await connection("teacher_specialty").insert({
            id:Date.now().toString(),
            teacher_id:teacher_id,
            class_id:class_id,
            specialty_id:specialty_id
        })
}