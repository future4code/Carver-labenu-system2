import connection from "../data/connection"

export const SelectIdSpecialty= async(name:string): Promise<any> =>{
    const result= await connection("specialty").select("id").where({name:name})
    return result
}