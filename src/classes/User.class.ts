export abstract class User {
    constructor(
        protected id: string,
        protected name: string,
        protected email: string,
      protected birth_date: string,
        protected class_id: string) {
            this.name=name;
            this.birth_date=birth_date;
            this.class_id=class_id;
            this.email=email;
            this.id=id;

         }
         public getClassid(){
             return this.class_id
         }
}