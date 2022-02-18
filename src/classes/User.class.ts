export abstract class User {
    protected id: string = Date.now().toString()
    constructor(
        protected name: string,
        protected email: string,
      protected birth_date: string,
        protected class_id: string) {
            this.name=name;
            this.birth_date=birth_date;
            this.class_id=class_id;
            this.email=email;
            

         }

}