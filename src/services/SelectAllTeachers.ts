import connection from "../data/connection"

export const SelectAllTeachers= async()=>{
 return await connection("teacher")

}