import connection from "../data/connection"

export const SelectClass= async(id:string) =>{
    const result= await connection("class").select("id").where({id:id})
    return result;

}