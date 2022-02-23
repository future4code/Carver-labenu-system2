import connection from "../data/connection"

export const selectTeacherById= async(id:string, email:string) =>{
    const result= await connection("teacher").select("id").where({id:id})
    .orWhere("teacher.email",email)
    return result;
}