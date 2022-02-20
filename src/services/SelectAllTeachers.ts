import connection from "../data/connection"

export const selectAllTeachers= async()=>{
 return await connection("teacher")

}