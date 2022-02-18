import connection from "../data/connection"
import { SelectIdSpecialty } from "./SelectIdSpecialty"
 import { InsertSpecialtyTeacher } from "./InsertSpecialtyTeacher"

export const InsertTeachers = async (
    id: string,
    email: string,
    name: string,
    class_id: string,
    birth_date: Date,
    specialty: string[]
    ) => {
        const getSpecialtyId=specialty.map((specialty:any)=>{
            return SelectIdSpecialty(specialty.name)
        })
        getSpecialtyId.map((specialtyId:any)=>{
            if( typeof specialtyId === "string"){
                InsertSpecialtyTeacher(id,class_id,specialtyId)
            }
        })
           
        const newTeacher={
            id:id,name:name,email:email,birth_date:birth_date,class_id:class_id
        }
    await connection("teacher").insert(newTeacher)
}