import connection from "../data/connection"

export const selectAllTeachers= async(poo:string)=>{
 return await connection("teacher")
 .whereLike("")

}