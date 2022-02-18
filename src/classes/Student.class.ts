import { Hobby } from './../Interfaces/Hobby';
import { insertHobby } from './../services/insertHobby';
import { getHobbies } from './../services/getHobbies';
import { insertStudent } from "../services/insertStudent";
import { User } from "./User.class";
import { insertHobbyStudent } from '../services/insertHobbyStudent';

export class Student extends User {
    private hobbies: string[]
    id: string = Date.now().toString()

    constructor(name: string, email: string, birth_date: string, class_id: string, hobbies: string[]) {
        super(name, email, birth_date, class_id)
        this.hobbies = hobbies

        this.createStudent()
        this.verificateHobbies()
        this.insertHobbyStudent()
    }

    private async createStudent() {
        return await insertStudent(this.id, this.name, this.email, this.birth_date, this.class_id)
    }

    private async verificateHobbies() {
        return this.hobbies.forEach(async (hobby) => {
            const verificate: Hobby[] = await getHobbies(hobby)
            if (!verificate.length) {
                insertHobby(hobby)
            }
        })
    }

    private async insertHobbyStudent() {
        return this.hobbies.forEach(async (hobby) => {
            const hobbyFound: Hobby[] = await getHobbies(hobby)
            await insertHobbyStudent(this.id, hobbyFound[0].id)
        })
    }
}