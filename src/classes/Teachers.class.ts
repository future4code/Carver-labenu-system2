import { User } from "./User.class";
import { SelectClass } from "../services/selectClass";
import { InsertTeachers } from "../services/InsertTeacher";

class Teachers extends User {
    constructor(
        id: string,
        name: string,
        email: string,
        birth_date: string,
        class_id: string,
        private specialty: string[]

    ) {
        super(id, email, name, birth_date, class_id);
        this.specialty = specialty;


    }
    public insertTeachers(): void {
        const birthModified:Date= 
        const res = SelectClass(this.class_id)
        res.then(res => {
            if(res.length>0){
                InsertTeachers(this.id,this.email,this.name,this.class_id,birthModified,this.specialty)
            }
        })

    }
    public getTeachers(): void {

    }
}