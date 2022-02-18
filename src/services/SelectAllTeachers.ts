import connection from "../data/connection"

export const SelectAllTeachers=()=>{
 const result=  connection("teacher")
 return result;
}