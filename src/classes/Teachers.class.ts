import { User } from "./User.class";


class Teachers extends User {
    constructor(
        id: string,
        name: string,
        email: string,
        birth_date: Date,
        class_id: string,
        private specialty: string[]

    ) {
        super(id, email, name, birth_date, class_id);
        this.specialty = specialty;

    }
    public insertTeachers():void{
        
    }
    public getTeachers():void{

    }
}