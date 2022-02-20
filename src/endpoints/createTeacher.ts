import { Request, Response } from "express";
import { Teachers } from "../classes/Teachers.class";
import { selectClass } from "../services/selectClass";
import { selectIdSpecialty } from "../services/selectIdSpecialty";
import { selectTeacherById } from "../services/selectTeacherById";

export const createTeacher = async (req: Request, res: Response) => {
    try {
        const { name, email, birth_date, class_id, specialty } = req.body
        const result = await selectClass(class_id)

        if(!name || !email || !birth_date || !class_id || !specialty.length){
            throw new Error("Preencha os campos corretamente.")
        }
        if(typeof name !=="string" ||typeof email !=="string" || typeof birth_date!=="string"|| typeof class_id !=="string" ){
                throw new Error ("O  tipo aceito das propriedades name, email, class_id e  birth_id é string, por favor preencha de forma correta.")
        }
        if(!result.length){
            throw new Error("coloque um class_id válido")
        }
        const result2= Promise.all(  specialty.map( async (res:string)=>{
           const consult = await selectIdSpecialty(res)

           return consult
        })
        )

        if((await result2)[0].length){
            const consult2= await selectTeacherById("%",email)
            if(consult2&& consult2.length){
                throw new Error("Esse email já foi cadastrado.")
            }
            else{
                new Teachers(name, email, birth_date, class_id, specialty)
            }
                
        }
        else{
            throw new Error("Coloque uma especialidade existente, como : JS,CSS, React,Typescript,POO (Programação Orientada a Objetos).")
        }

        res.status(201).send("Professor criado.")

    } catch (error) {
        if (error instanceof Error) {
            switch (error.message) {
                case "O  tipo aceito das propriedades name, email, class_id e  birth_id é string, por favor preencha de forma correta.":
                    res.status(422)
                    break
                case "Preencha os campos corretamente.":
                    res.status(422)
                    break
                case "Coloque uma especialidade existente, como : JS,CSS, React,Typescript,POO (Programação Orientada a Objetos).":
                    res.status(404)
                    break
                case "Esse email já foi cadastrado.":
                    res.status(422)
                    break
                case "coloque um class_id válido":
                    res.status(422)
            }
            res.send(error.message)
        }
    }
}