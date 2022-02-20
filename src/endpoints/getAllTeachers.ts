import {Request,Response} from "express"
import { selectAllTeachers } from "../services/selectAllTeachers"

export const getAllTeachers= async (req:Request,res:Response): Promise<void>=>{
    try{
        let result= await selectAllTeachers()
    res.status(200).send(result)

    }catch(error:any){
        
        console.log(error.message)
    }
}