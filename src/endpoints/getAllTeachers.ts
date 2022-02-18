import {Request,Response} from "express"
import { SelectAllTeachers } from "../services/SelectAllTeachers"

export const getAllTeachers=async (req:Request,res:Response)=>{
    try{
    const result= await SelectAllTeachers()
    res.status(200).send(result)

    }catch(error:any){
        console.log(error.message)
    }
}