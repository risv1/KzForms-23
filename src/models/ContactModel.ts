class ContactModel{
    id: string
    regno: number;
    lastName: string;
    firstName: string;
    age: number;
    email: string;
    github: string;
    constructor(id: string, regno: number, lastName: string, firstName: string, age: number, email: string, github: string){
        this.id=id;
        this.regno = regno;
        this.lastName = lastName;
        this.firstName = firstName;
        this.age=age;
        this.email=email;
        this.github=github;
    }
}
export default ContactModel;