import { Hobby } from './../Interfaces/Hobby';
import { insertHobby } from './../services/insertHobby';
import { getHobbies } from './../services/getHobbies';
import { insertStudent } from "../services/insertStudent";
import { User } from "./User.class";
import { insertHobbyStudent } from '../services/insertHobbyStudent';

export class Student extends User {
    private hobbies: string[]

    constructor(name: string, email: string, birth_date: string, class_id: string, hobbies: string[]) {
        super(name, email, birth_date, class_id)
        this.hobbies = hobbies

        this.createStudent()
        this.verificateHobbies()
        this.insertHobbyStudent()
    }

    private async createStudent() {
        const dateSplit = this.birth_date.split("/")
        const newBirthDate = `${dateSplit[2]}-${dateSplit[1]}-${dateSplit[0]}`

        return await insertStudent(this.id, this.name, this.email, newBirthDate, this.class_id)
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