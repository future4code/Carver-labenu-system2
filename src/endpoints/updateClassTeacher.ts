import { updateTeacher } from "../services/updateTeacher";
import { Response,Request } from "express";

export const updateClassTeacher= async(req:Request,res:Response)=>{
    try{
        const {teach_Id,class_id}=req.body
        await updateTeacher(teach_Id,class_id)
        res.status(200).send("Turma atualizada")

    }catch(error:any){

    }

}