import { User } from "./User.class";
import { selectClass } from "../services/selectClass";
import { InsertTeachers } from "../services/InsertTeacher";

export class Teachers extends User {
    constructor(
        name: string,
        email: string,
        birth_date: string,
        class_id: string,
        private specialty: string[]

    ) {
        super(name,email, birth_date, class_id);
        this.specialty = specialty;
        this.insertTeachers()
    }
    public insertTeachers(): void {
        const dateSplit = this.birth_date.split("/")
        const newBirthDate = `${dateSplit[2]}-${dateSplit[1]}-${dateSplit[0]}`

        const res = selectClass(this.class_id)
        res.then(res => {
            if(res.length>0){
                InsertTeachers(this.id,this.name,this.email,this.class_id,newBirthDate,this.specialty)
            }
        })

    }

}