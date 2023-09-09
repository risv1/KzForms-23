class ContactModel {
    id: string;
    regno: string;
    lastName: string;
    firstName: string;
    age: number;
    email: string;
    github: string;
    [key: string]: string | number;
    constructor(id: string, regno: string, lastName: string, firstName: string, age: number, email: string, github: string) {
        this.id = id;
        this.regno = regno;
        this.lastName = lastName;
        this.firstName = firstName;
        this.age = age;
        this.email = email;
        this.github = github;
    }
}
export default ContactModel;