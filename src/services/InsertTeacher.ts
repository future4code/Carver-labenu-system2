import connection from "../data/connection"

export const insertTeachers = async (
    id: string,
    email: string,
    name: string,
    class_id: string,
    birth_date: string,
    specialty: string[]) => {
        const newTeacher={
            id:id,name:name,email:email,birth_date:birth_date,class_id:class_id
        }
    await connection("teacher").insert(newTeacher)
}