import { User } from "./User.class";
import { SelectClass } from "../services/selectClass";
import { InsertTeachers } from "../services/InsertTeacher";

export class Teachers extends User {
    constructor(
        name: string,
        email: string,
        birth_date: string,
        class_id: string,
        private specialty: string[]

    ) {
        super(email, name, birth_date, class_id);
        this.specialty = specialty;
        this.insertTeachers()
    }
    public insertTeachers(): void {
        const dateSplit = this.birth_date.split("/")
        const newBirthDate = `${dateSplit[2]}-${dateSplit[1]}-${dateSplit[0]}`

        const res = SelectClass(this.class_id)
        res.then(res => {
            if(res.length>0){
                InsertTeachers(this.id,this.email,this.name,this.class_id,newBirthDate,this.specialty)
            }
            else{
                throw new Error("Insira uma turma válida!")
            }
        })

    }

}